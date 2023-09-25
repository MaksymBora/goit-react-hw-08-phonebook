import { FiLogOut } from 'react-icons/fi';
import { StyledBtn } from './LogoutBtn.styled';

export const LogoutBtn = () => {
  return (
    <>
      <StyledBtn>
        <span>Exit</span>
        <FiLogOut size={21} />
      </StyledBtn>
    </>
  );
};
