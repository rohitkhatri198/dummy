import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <>
      <div className={`${s.bottomSection}`}>
        <div className="">
          <Link href="#">
            <a className={s.links}>
              <Image
                src="/images/logo-footer.png"
                width="100%"
                height="64px"
                objectFit="contain"
                loading="eager"
                alt="logo-footer"
              />
            </a>
          </Link>
        </div>
        <div className={`${s.arrowSection}`}>
          <Link href="#">
            <a className={s.links}>
              <Image
                src="/images/arrow-bottom.svg"
                width="100%"
                height="96px"
                objectFit="contain"
                loading="eager"
                alt="logo-footer"
              />
            </a>
          </Link>
        </div>
        <div className={`${s.links}`}>
          <Link href="#">
            <a className={s.links}>
              <Image
                src="/images/logo2-footer.png"
                width="100%"
                height="64px"
                objectFit="contain"
                loading="eager"
                alt="logo2-footer"
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
