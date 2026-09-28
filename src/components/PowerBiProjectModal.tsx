import React from 'react';
import { ProjectStudioModal } from './ProjectStudioModal';
import { getRoleData } from '../data/roles';

interface PowerBiProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleteProject: () => void;
  targetRole?: string;
}

export const PowerBiProjectModal: React.FC<PowerBiProjectModalProps> = ({
  isOpen,
  onClose,
  onCompleteProject,
  targetRole = 'Data Analyst',
}) => {
  const rolePkg = getRoleData(targetRole);
  return (
    <ProjectStudioModal
      isOpen={isOpen}
      onClose={onClose}
      config={rolePkg.projectStudio}
      onCompleteProject={onCompleteProject}
    />
  );
};
