import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

type Props = {
  title: string;
  content: string | number;
  icon?: IconProp;
  iconBg?: "blue" | "orange" | "green";
  change?: number;
  history?: string;
  href?: string;
  tooltip?: string;
};

const Change = (props: Props) => {
  if (typeof props.change === 'undefined') {
    return null;
  }
  let changeClass = "text-success";
  let changeIcon: IconProp = "arrow-up";
  if (props.change < 0) {
    changeClass = "text-danger";
    changeIcon = "arrow-down";
  }
  return (
    <span className={classnames("change", changeClass)}>
      <FontAwesomeIcon icon={changeIcon} /> {props.change}%
    </span>
  );
};

export default (props: Props) => {
  let content = (
    <>
      <div className="title">{props.title}</div>
      <span className="content">{props.content}</span>
      {props.icon && (
        <span className={classnames("icon", props.iconBg)}>
          <FontAwesomeIcon icon={props.icon} />
        </span>
      )}
      <div className="history">
        <Change {...props} />
        <span className="text-muted">{props.history}</span>
      </div>
    </>
  );
  if (props.href) {
    content = (
      <Link to={ props.href } className="dashboard-widget">
        { content }
      </Link>
    );
  } else {
    content = (
      <div className="dashboard-widget">
        { content }
      </div>
    );
  }

  if (!props.tooltip) {
    return content;
  }

  const tooltip = (
    <Tooltip id='counterTooltip'>
      { props.tooltip }
    </Tooltip>
  );

  return (
    <OverlayTrigger
      delay={{ show: 50, hide: 0 }}
      overlay={ tooltip }
    >
      { content }
    </OverlayTrigger>
  );
};
