"use client";

import { ReactNode } from "react";
import { Notification, ProcCreatedDt } from "./types";
import { useMediaQuery } from "@/base/hooks/useMediaQuery";
import { IconButton } from "@/base/components/IconButton/IconButton";
import { Tabs } from "@/base/components/Tabs/Tabs";
import { ItemArticle } from "./ItemArticle";
import { ItemUpdate } from "./ItemUpdate";
import classNames from "classnames/bind";
import style from "./NotificationPopup.module.scss";

const cx = classNames.bind(style);

interface Props {
  isLogin: boolean;
  userId?: string;
}

const formatDateTime = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const createProcCreatedDt = (): ProcCreatedDt => ({
  createdDate: null,
  diffInMilliseconds: null,
  isNow: null,
  defineIsNow(date: string): void {
    const createdDate = new Date(date);
    this.createdDate = createdDate;
    const diffInMilliseconds = new Date().getTime() - createdDate.getTime();
    this.diffInMilliseconds = diffInMilliseconds;
    this.isNow = diffInMilliseconds < 30 * 60 * 1000;
  },
  init(): void {
    this.defineIsNow(new Date().toISOString());
  },
});

const NotificationPopup = ({ userId, isLogin = false }: Props) => {
  console.log(userId);
  const isDesktop = useMediaQuery("desktop");

  const dummyDate = "2024-12-07 13:25:00";
  const notifications: Array<Notification> = [
    {
      userAlarmId: "1fa99aad-7f04-11ef-a374-0221b3846233",
      userId: "42a3b4a0-7ee8-11ef-a374-0221b3846233",
      articleId: "A200401",
      userReplyName: null,
      topicId: null,
      alarmType: "ARTICLE",
      articleUrl: "www.koreatimes.co.kr",
      message: "[단독] blackpink drop ep",
      readYn: "N",
      readDt: null,
      createdDt: dummyDate,
    },
    {
      userAlarmId: "1fa99aad-7f04-11ef-a374-0221b3846233",
      userId: "42a3b4a0-7ee8-11ef-a374-0221b3846233",
      articleId: "A200401",
      userReplyName: "David",
      topicId: null,
      alarmType: "COMMENT",
      message: "댓글이 달렸습니다.[2집축하😀]",
      readYn: "N",
      readDt: null,
      createdDt: dummyDate,
    },
    {
      userAlarmId: "1fa99aad-7f04-11ef-a374-0221b3846233",
      userId: "42a3b4a0-7ee8-11ef-a374-0221b3846233",
      articleId: "A200401",
      userReplyName: "Patricia",
      topicId: null,
      alarmType: "COMMENT",
      message: "대댓글이 달렸습니다.[2집[]축1하]",
      readYn: "N",
      readDt: null,
      createdDt: "2024-10-31 00:00:00",
    },
    {
      userAlarmId: "1fa99aad-7f04-11ef-a374-0221b3846233",
      userId: "42a3b4a0-7ee8-11ef-a374-0221b3846233",
      articleId: "A200401",
      userReplyName: "Patricia",
      topicId: null,
      alarmType: "COMMENT",
      message: "추천을 받았습니다.[2집추천[]축1하]",
      readYn: "N",
      readDt: null,
      createdDt: "2024-10-31 00:00:00",
    },
    {
      userAlarmId: "1fa99aad-7f04-11ef-a374-0221b3846233",
      userId: "42a3b4a0-7ee8-11ef-a374-0221b3846233",
      articleId: "A200401",
      userReplyName: null,
      topicId: null,
      alarmType: "NOTICE",
      articleUrl: "www.koreatimes.co.kr",
      message: "This is Case for NOTICE alarmType",
      readYn: "N",
      readDt: null,
      createdDt: "2024-10-31 00:00:00",
    },
  ];

  const procNotifications = {
    markAllAsRead(): void {
      // 전체 읽음 처리 로직
      console.log("Mark all as read");
    },
    markAsRead(isRead: string, articleId: string): void {
      const updatedStatus = isRead === "N" ? "Y" : "N";
      const updatedDate = formatDateTime(new Date());
      // window.open(articleId, "_blank");
      console.log(`Marked as ${updatedStatus}: ${articleId} on ${updatedDate}`);
    },
    createTabLabels(notifications: Notification[]): Array<ReactNode> {
      const hasArticle = notifications.some(
        (n) => n.alarmType === "ARTICLE" && n.readYn === "N"
      );
      const hasUpdate = notifications.some(
        (n) => n.alarmType !== "ARTICLE" && n.readYn === "N"
      );

      const labelArticle = hasArticle ? (
        <span className={cx("badge")}>
          Article<span className={cx("a11y")}>New</span>
        </span>
      ) : (
        "Article"
      );

      const labelUpdate = hasUpdate ? (
        <span className={cx("badge")}>
          Update<span className={cx("a11y")}>New</span>
        </span>
      ) : (
        "Update"
      );

      return [labelArticle, labelUpdate];
    },
  };

  const renderNotificationList = (
    notifications: Notification[],
    filter: (n: Notification) => boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component: React.ComponentType<any>
  ) => {
    return (
      <ul className={cx("list")}>
        {notifications.filter(filter).map((n) => (
          <Component
            key={n.userAlarmId}
            {...n}
            procCreatedDt={createProcCreatedDt()}
            markAsRead={procNotifications.markAsRead}
          />
        ))}
      </ul>
    );
  };

  const labels = procNotifications.createTabLabels(notifications);

  return (
    <div className={cx("wrap")}>
      <div className={cx("header")}>
        <h2 className={cx("title")}>Notifications</h2>
        <div className={cx("btn-wrap")}>
          {isLogin && (
            <IconButton
              iconName="setting"
              label="Button Setting"
              onClick={() => {}}
              size={isDesktop ? "sm" : "md"}
              customClassName={cx("btn-setting")}
              customIconColor="fg-subtle"
            />
          )}
          <IconButton
            iconName="close"
            label="Button Close"
            onClick={() => {}}
            size="md"
            customClassName={cx("btn-close")}
          />
        </div>
      </div>
      {!isLogin && (
        <div className={cx("box", "update")}>
          <p className={cx("no-data")}>
            Sign up for free to receive article alerts for your favorite topics.
          </p>
        </div>
      )}
      {isLogin && (
        <Tabs
          variant="underline"
          labels={labels}
          width="fill"
          activeIndex={0}
          customClassName={cx("tabs")}
        >
          <div className={cx("box")}>
            {renderNotificationList(
              notifications,
              (n) => n.alarmType === "ARTICLE",
              ItemArticle
            )}
          </div>
          <div className={cx("box")}>
            {renderNotificationList(
              notifications,
              (n) => n.alarmType !== "ARTICLE",
              ItemUpdate
            )}
          </div>
        </Tabs>
      )}
    </div>
  );
};

export { NotificationPopup };
