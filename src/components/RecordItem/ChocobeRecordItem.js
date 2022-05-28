import React, {
  useMemo,
  useCallback,
} from "react";

import "./ChocobeRecordItem.scss";

const ChocobeRecordItem = ({
  id,
  value,
  isPlay,
  onClickRoot,
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
    // FIXME: Play || Pause 동작 추가하기
    console.log(`${children} 과목 플래이`);
  }, [children]);
  
  return (
    <div 
      className={rootClassName}
      onClick={() => onClickRoot({ id, children })}
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

export default React.memo(ChocobeRecordItem);