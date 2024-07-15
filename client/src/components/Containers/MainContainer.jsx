import styles from "../../styles/Containers/MainContainer.module.scss";

const MainContainer = ({ Children, optionClass }) => {
  return <div className={`${styles.container} ${optionClass}`}>{Children}</div>;
};

MainContainer.defaultProps = {
  optionClass: undefined,
};

export default MainContainer;
