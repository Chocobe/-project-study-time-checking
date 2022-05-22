import React, {
  useMemo,
  useCallback,
} from "react";

import "./ChocobeRecorderItem.scss";

const ChocobeRecorderItem = ({
  value,
  isPlay,
  onClickRoot,
  onUpdate,
  children,
}) => {
  const rootClassName = useMemo(() => {
    const buttonRootClass = "ChocobeRecorderItem";

    return isPlay
      ? `${buttonRootClass} ${buttonRootClass}__play`
      : buttonRootClass;
  }, [isPlay]);

  const onClickController = useCallback(e => {
    e.stopPropagation();

    onUpdate({
      label: children,
      value,
    });
  }, [children, value, onUpdate]);
  
  return (
    <div 
      className={rootClassName}
      onClick={onClickRoot}
    >
      <div className="ChocobeRecorderItem-controller">
        <button 
          className="ChocobeRecorderItem-controller-button"
          onClick={onClickController}
        >
          <span className="ChocobeRecorderItem-controller-button-icon">
            <span className="ChocobeRecorderItem-controller-button-icon-pause" />
            <span className="ChocobeRecorderItem-controller-button-icon-play" />
          </span>
        </button>
      </div>

      <div className="ChocobeRecorderItem-content">
        <div className="ChocobeRecorderItem-content-label">
          {children}
        </div>

        <div className="ChocobeRecorderItem-content-value">
          {value}
        </div>
      </div>
    </div>
  )
};

export default React.memo(ChocobeRecorderItem);