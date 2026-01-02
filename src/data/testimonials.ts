import DanielImg from '../assets/image-daniel.jpg';
import JonathanImg from '../assets/image-jonathan.jpg';
import JeanetteImg from '../assets/image-jeanette.jpg';
import PatricImg from '../assets/image-patrick.jpg';
import KiraImg from '../assets/image-kira.jpg';


export const testimonials = [
  {
    id: 1,
    userName: 'Daniel Clifford',
    userImage: DanielImg,
    isVerified: true,
    styling: {
      bgColor: 'bg-(--purple-500)',
      hTextColor: 'text-white',
      pTextColor: 'text-gray-300',
      span: 'md:col-span-2 col-span-1'
    },
    title: `I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.`,
    description: `“ I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup. ”`
  },
  {
    id: 2,
    userName: 'Jonathan Walters',
    userImage: JonathanImg,
    isVerified: true,
    styling: {
      bgColor: 'bg-(--gray-500)',
      hTextColor: 'text-white',
      pTextColor: 'text-gray-300',
    },
    title: `The team was very supportive and kept me motivated`,
    description: `“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”`
  },
  {
    id: 3,
    userName: 'Kira Whittle',
    userImage: KiraImg,
    isVerified: true,
    styling: {
      bgColor: 'bg-white',
      hTextColor: 'text-(--dark-blue)',
      pTextColor: 'text-gray-400',
      span: 'xl:row-span-2 xl:col-span-1 row-span-1 md:col-span-3 col-span-1',
      order: 'xl:order-none order-last'
    },
    title: `Such a life-changing experience. Highly recommended!`,
    description: `“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”`
  },
  {
    id: 4,
    userName: 'Jeanette Harmon',
    userImage: JeanetteImg,
    isVerified: true,
    styling: {
      bgColor: 'bg-white',
      hTextColor: 'text-(--dark-blue)',
      pTextColor: 'text-gray-400',
    },
    title: `An overall wonderful and rewarding experience`,
    description: `“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”`
  },
  {
    id: 5,
    userName: 'Patrick Abrams',
    userImage: PatricImg,
    isVerified: true,
    styling: {
      bgColor: 'bg-(--dark-blue)',
      hTextColor: 'text-white',
      pTextColor: 'text-gray-400',
      span: 'md:col-span-2'
    },
    title: `Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.`,
    description: `“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”`
  },
]