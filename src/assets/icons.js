import IcoMoon from "react-icomoon";
import iconSet from "./selection.json";
import styled from "styled-components";

const Icon = ({ icon, size, color }) => (
    <StyledIcon icon={icon} size={size} color={color} />
);

const StyledIcon = styled(IcoMoon).attrs(props => ({
    iconSet: iconSet,
    icon: props.icon,
    size: props.size,
    color: props.color
}))`
    display: inline-block;
    vertical-align: middle;
`;

export default Icon;