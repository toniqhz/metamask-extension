import React from 'react';
import { matchPath, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  BUILD_QUOTE_ROUTE,
  CONFIRM_TRANSACTION_ROUTE,
  CONNECTIONS,
  DEFAULT_ROUTE,
  SWAPS_ROUTE,
} from '../../../helpers/constants/routes';
import {
  Box,
  ButtonIcon,
  ButtonIconSize,
  Icon,
  IconName,
  IconSize,
  Text,
} from '../../component-library';
import { useI18nContext } from '../../../hooks/useI18nContext';
import {
  AlignItems,
  BackgroundColor,
  BlockSize,
  BorderRadius,
  Display,
  FlexDirection,
  IconColor,
  JustifyContent,
  TextColor,
  TextVariant,
} from '../../../helpers/constants/design-system';
import { getSendStage, SEND_STAGES } from '../../../ducks/send';
import { getUnapprovedTransactions } from '../../../selectors';
import { showSelectActionModal } from './app-footer-actions';

export const AppFooter = () => {
  const t = useI18nContext();
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const activeWallet = location.pathname === DEFAULT_ROUTE;
  const activeConnections = location.pathname === CONNECTIONS;
  const isUnlocked = useSelector((state) => state.metamask.isUnlocked);

  // Disable the network and account pickers if the user is in
  // a critical flow
  const sendStage = useSelector(getSendStage);
  const isTransactionEditPage = [
    SEND_STAGES.EDIT,
    SEND_STAGES.DRAFT,
    SEND_STAGES.ADD_RECIPIENT,
  ].includes(sendStage);
  const isConfirmationPage = Boolean(
    matchPath(location.pathname, {
      path: CONFIRM_TRANSACTION_ROUTE,
      exact: false,
    }),
  );
  const isSwapsPage = Boolean(
    matchPath(location.pathname, { path: SWAPS_ROUTE, exact: false }),
  );
  const isSwapsBuildQuotePage = Boolean(
    matchPath(location.pathname, { path: BUILD_QUOTE_ROUTE, exact: false }),
  );

  const unapprovedTransactions = useSelector(getUnapprovedTransactions);

  const hasUnapprovedTransactions =
    Object.keys(unapprovedTransactions).length > 0;

  const hideFooter =
    isSwapsPage ||
    isTransactionEditPage ||
    isConfirmationPage ||
    isSwapsBuildQuotePage ||
    hasUnapprovedTransactions;

  return (
    <>
      {isUnlocked ? (
        <>
          {hideFooter ? null : (
            <Box
              className="app-footer"
              width={BlockSize.Full}
              backgroundColor={BackgroundColor.backgroundAlternative}
              display={Display.Flex}
              flexDirection={FlexDirection.Row}
              alignItems={AlignItems.center}
            >
              <Box
                className="app-footer__contents"
                width={BlockSize.Full}
                display={Display.Flex}
                alignItems={AlignItems.center}
                justifyContent={JustifyContent.spaceBetween}
                backgroundColor={BackgroundColor.backgroundDefault}
                flexDirection={FlexDirection.Row}
                padding={2}
                paddingLeft={4}
                paddingRight={4}
                gap={2}
              >
                <Box
                  as="a"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(DEFAULT_ROUTE);
                  }}
                  className="app-footer__button"
                  width={BlockSize.OneThird}
                  padding={2}
                  display={Display.Flex}
                  flexDirection={FlexDirection.Column}
                  alignItems={AlignItems.center}
                  tabIndex={0}
                >
                  <Icon
                    data-testid="app-footer-wallet-button"
                    color={
                      activeWallet
                        ? IconColor.primaryDefault
                        : IconColor.iconAlternative
                    }
                    name={IconName.Wallet}
                    size={IconSize.Lg}
                  />
                  <Text
                    color={
                      activeWallet
                        ? TextColor.primaryDefault
                        : TextColor.textAlternative
                    }
                    variant={TextVariant.bodyMd}
                  >
                    {t('wallet')}
                  </Text>
                </Box>
                <Box
                  width={BlockSize.OneThird}
                  padding={2}
                  display={Display.Flex}
                  flexDirection={FlexDirection.Column}
                  alignItems={AlignItems.center}
                  justifyContent={JustifyContent.center}
                  backgroundColor={BackgroundColor.backgroundDefault}
                  tabIndex={0}
                >
                  <ButtonIcon
                    className="app-footer__actions-button"
                    data-testid="app-footer-actions-button"
                    iconName={IconName.SwapVertical}
                    color={IconColor.primaryInverse}
                    backgroundColor={BackgroundColor.primaryDefault}
                    borderRadius={BorderRadius.full}
                    size={ButtonIconSize.Lg}
                    onClick={() => dispatch(showSelectActionModal())}
                  />
                </Box>
                <Box
                  as="a"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(CONNECTIONS);
                  }}
                  className="app-footer__button"
                  width={BlockSize.OneThird}
                  padding={2}
                  display={Display.Flex}
                  flexDirection={FlexDirection.Column}
                  alignItems={AlignItems.center}
                  tabIndex={0}
                >
                  <Icon
                    data-testid="app-footer-connections-button"
                    color={
                      activeConnections
                        ? IconColor.primaryDefault
                        : IconColor.iconAlternative
                    }
                    name={IconName.Global}
                    size={IconSize.Lg}
                  />
                  <Text
                    color={
                      activeConnections
                        ? TextColor.primaryDefault
                        : TextColor.textAlternative
                    }
                    variant={TextVariant.bodyMd}
                  >
                    {t('connections')}
                  </Text>
                </Box>
              </Box>
            </Box>
          )}
        </>
      ) : null}
    </>
  );
};
