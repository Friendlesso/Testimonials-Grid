import Illustration from "../assets/bg-pattern-quotation.svg";

type StylingProps = {
  bgColor: string,
  hTextColor: string,
  pTextColor: string,
  span?: string,
  order?: string,
}

type CardProps = {
  id: number;
  title: string;
  description: string;
  userName: string;
  userImage: string;
  isVerified: boolean;
  styling?: StylingProps;
}

export function Card(
  {
    id,
    title,
    description,
    userName,
    userImage,
    isVerified,
    styling,
  }: CardProps) {
  return (
    <article className={`${styling?.bgColor} ${styling?.span} ${styling?.order} relative flex flex-col p-8 gap-1 rounded-[1.250rem] shadow-2xl`}>
      <div className="flex items-center gap-4 relative z-20">
        <img className="rounded-4xl w-10 h-10" src={userImage} alt={userName} />
        <div>
          <p className={`${styling?.hTextColor}`}>{userName}</p>
          {isVerified &&
            <p className={`${styling?.pTextColor}`}>Verified Graduate</p>
          }
        </div>
      </div>
      <div className="flex flex-col gap-4 relative z-10">
        <h3 className={`${styling?.hTextColor} text-xl font-semibold`}>{title}</h3>
        <p className={`${styling?.pTextColor}`}>{description}</p>
      </div>
      {id === 1 && (
        <div className="absolute right-25 top-0">
          <img src={Illustration} />
        </div>
      )}

    </article>
  )
}
