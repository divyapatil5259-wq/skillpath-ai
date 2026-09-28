import { RoleDataPackage } from '../../types';
import { dataAnalystRole } from './dataAnalyst';
import { softwareEngineerRole } from './softwareEngineer';
import { aiMlEngineerRole } from './aiMlEngineer';
import { dataScientistRole } from './dataScientist';
import { fullStackDeveloperRole } from './fullStackDeveloper';
import { backendDeveloperRole } from './backendDeveloper';
import { frontendDeveloperRole } from './frontendDeveloper';
import { cloudEngineerRole, devOpsEngineerRole, cybersecurityEngineerRole } from './cloudDevopsSec';
import { businessAnalystRole, uiUxDesignerRole } from './businessAnalystUiUx';

export const ROLE_DATA: Record<string, RoleDataPackage> = {
  'Data Analyst': dataAnalystRole,
  'Software Engineer': softwareEngineerRole,
  'AI/ML Engineer': aiMlEngineerRole,
  'Data Scientist': dataScientistRole,
  'Full Stack Developer': fullStackDeveloperRole,
  'Backend Developer': backendDeveloperRole,
  'Frontend Developer': frontendDeveloperRole,
  'Cloud Engineer': cloudEngineerRole,
  'DevOps Engineer': devOpsEngineerRole,
  'Cybersecurity Engineer': cybersecurityEngineerRole,
  'Business Analyst': businessAnalystRole,
  'UI/UX Designer': uiUxDesignerRole,
};

export const AVAILABLE_ROLES = Object.keys(ROLE_DATA);

/**
 * Returns role package for the requested role name.
 * If not found, falls back safely to 'Data Analyst' to prevent errors.
 */
export function getRoleData(roleName: string): RoleDataPackage {
  if (ROLE_DATA[roleName]) {
    return ROLE_DATA[roleName];
  }
  // Case-insensitive / partial match fallback
  const lower = roleName.toLowerCase();
  for (const key of Object.keys(ROLE_DATA)) {
    if (key.toLowerCase() === lower || key.toLowerCase().includes(lower) || lower.includes(key.toLowerCase())) {
      return ROLE_DATA[key];
    }
  }
  // Safe default fallback
  return ROLE_DATA['Data Analyst'];
}
