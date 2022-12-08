import React, { FC } from "react";
import s from "./TaskCard.module.scss";
import Image from "next/image";

interface Props {
  name: string;
  isVisible: boolean;
}
const TaskCard: FC<Props> = ({ name, isVisible = true }) => {
  return (
    <div className={`${s.container} ${s[name]}`}>
      <div className={s.cardWrapper}>
        <div className={s.singleTask}>
          <div className={s.taskCategory}>
            {isVisible ? (
              <div className={s.category}>
                <p>{name}</p>
              </div>
            ) : (
              ""
            )}

            <div className={`${s.addWrapper}`}>
              <div className={s.add}>
                <div className={s.addIcon}>
                  <Image
                    src="/images/addIcon.svg"
                    height={20}
                    width={20}
                    alt="Add Icon"
                  />
                </div>
                <p>Add</p>
              </div>
            </div>
          </div>
          <div className={s.taskTitle}>
            <p> ~I need a file folder system for new token</p>
          </div>
          <div className={s.taskStatus}>
            <div className={s.icon}>
              <Image
                src="/images/contributors.svg"
                alt="traced icon"
                height={20}
                width={20}
              />
            </div>
            <div className={s.status}>
              <p>25 Contributors</p>
            </div>
          </div>

          <div className={s.taskDescription}>
            <p>
              Massa laoreet vel, cursus viverra interdum nec, eget arcu. Egestas
              at diam id duis consequat risus. Pretium, imperdiet et leo...
            </p>
          </div>

          <div className={s.rewards}>
            <div className={s.cryptoCurrency}>
              <Image
                src="/images/tether.png"
                width={24}
                height={22}
                alt="Icon"
              />
              <p className={s.amount}>200 usdt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
