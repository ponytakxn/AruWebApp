export enum CallRole {
  USER = "USER",
  CALLER = "CALLER",
  CALLEE = "CALLEE",
}

export type CallRoleContext = {
  callRole: CallRole;
  setCallRole: (role: CallRole) => void;
};