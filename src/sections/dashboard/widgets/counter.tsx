import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  content: string;
  icon?: IconProp;
  iconBg?: "blue" | "orange" | "green";
  change?: string;
  changeType?: "good" | "bad";
  history?: string;
  href?: string;
};

export default (props: Props) => {
  let changeClass = "text-success";
  let changeIcon: IconProp = "arrow-up";
  if (props.change !== "good") {
    changeClass = "text-danger";
    changeIcon = "arrow-down";
  }
  const content = (
    <>
      <div className="title">{props.title}</div>
      <span className="content">{props.content}</span>
      {props.icon && (
        <span className={classnames("icon", props.iconBg)}>
          <FontAwesomeIcon icon={props.icon} />
        </span>
      )}
      <div className="history">
        {props.change && (
          <span className={classnames("change", changeClass)}>
            <FontAwesomeIcon icon={changeIcon} /> {props.change}
          </span>
        ) }
        <span className="text-muted">{props.history}</span>
      </div>
    </>
  );
  if (props.href) {
    return (
      <Link to={ props.href } className="dashboard-widget">
        { content }
      </Link>
    );
  }

  return (
    <div className="dashboard-widget">
      { content }
    </div>
  );
};
