import { type ReactNode } from "react";

type StylingProps = {
  bgColor: string,
  hTextColor: string,
  pTextColor: string,
}

type CardProps = {
  title: string;
  description: string;
  userName: string;
  isVerified: boolean;
  userImage: string;
  className?: string;
  children?: ReactNode;
  styling?: StylingProps;
}

export function Card({ title, description, userName, userImage, isVerified, styling, className, children }: CardProps) {
  return (
    <article className={`${className} ${styling?.bgColor} relative p-8 rounded-[1.250rem]`}>
      <div className="flex items-center gap-4">
        <img className="rounded-4xl" src={userImage} alt={userName} />
        <div>
          <p>{userName}</p>
          {isVerified &&
            <p>Verified Graduate</p>
          }
        </div>
      </div>
      <div className="flex flex-col gap-4 relative z-10">
        <h3 className={`${styling?.hTextColor} text-xl font-semibold`}>{title}</h3>
        <p className={`${styling?.pTextColor}`}>{description}</p>
      </div>
      {children}
    </article>
  )
}