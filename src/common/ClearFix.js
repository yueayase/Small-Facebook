import styled from "styled-components";

const ClearFix = styled.div`
    height: ${(props) => props.height || '60px'};
`;

export default ClearFix;