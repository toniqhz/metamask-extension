import { ApprovalControllerState } from '@metamask/approval-controller';
import { ApprovalType } from '@metamask/controller-utils';

type ApprovalsMetaMaskState = {
  metamask: {
    pendingApprovals: ApprovalControllerState['pendingApprovals'];
    approvalFlows: ApprovalControllerState['approvalFlows'];
  };
};

export const getApprovalRequestsByType = (
  state: ApprovalsMetaMaskState,
  approvalType: ApprovalType,
) => {
  const pendingApprovalRequests = Object.values(
    state.metamask.pendingApprovals,
  ).filter(({ type }) => type === approvalType);

  return pendingApprovalRequests;
};

export function hasPendingApprovals(
  state: ApprovalsMetaMaskState,
  approvalType: ApprovalType,
) {
  const pendingApprovalRequests = getApprovalRequestsByType(
    state,
    approvalType,
  );

  return pendingApprovalRequests.length > 0;
}

export function getPendingApprovalFlows(state: ApprovalsMetaMaskState) {
  return state.metamask.approvalFlows;
}

export function hasPendingApprovalFlows(state: ApprovalsMetaMaskState) {
  return getPendingApprovalFlows(state).length > 0;
}
