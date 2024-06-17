import Snehal from "../assets/images/snehal.jpg";
import John from "../assets/images/john.jpg";
import Shivangi from "../assets/images/shivangi.jpg";
import { FaInfinity } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { FiAward } from "react-icons/fi";
import { MdOutlineLightbulb, MdCorporateFare, MdFamilyRestroom } from "react-icons/md";

export const team = [
  {
    id: 1,
    personalImage: Snehal,
    coFounder: "Snehal Garde",
    designation: "Co-Founder, Civil Law",
    details: "Snehal has over 15 years of experience in business law, helping clients navigate complex legal issues.",
  },
  {
    id: 2,
    personalImage: Shivangi,
    coFounder: "Shivangi Garde",
    designation: "Co-Founder, Business Law",
    details:
      "Shivangi has extensive experience in real estate law, helping clients navigate complex transactions and disputes.",
  },
  {
    id: 3,
    personalImage: John,
    coFounder: "John Garde",
    designation: "Co-Founder, Family Law",
    details:
      "John has a proven track record of success in complex litigation, helping clients achieve favorable outcomes.",
  },
];

export const coreValues = [
  {
    id: 1,
    valueName: "Integrity",
    valueIcon: <FaInfinity size={40} />,
    valueDescription: "We are committed to the highest ethical standards, always acting with honesty and transparency.",
  },
  {
    id: 2,
    valueName: "Advocacy",
    valueIcon: <GoLaw size={40} />,
    valueDescription:
      "We are passionate advocates for our clients, tirelessly fighting to protect their rights and interests.",
  },
  {
    id: 3,
    valueName: "Excellence",
    valueIcon: <FiAward size={40} />,
    valueDescription:
      "We strive for excellence in every aspect of our work, delivering exceptional legal services to our clients.",
  },
];

export const experties = [
  {
    id: 1,
    expertiesName: "Litigation",
    expertiesIcon: <MdOutlineLightbulb size={40} />,
    expertiesDescription:
      "Our experienced litigators excel in handling complex disputes and achieving favorable outcomes for our clients.",
  },
  {
    id: 2,
    expertiesName: "Corporate Law",
    expertiesIcon: <MdCorporateFare size={40} />,
    expertiesDescription:
      "We provide comprehensive legal services to businesses of all sizes, guiding them through corporate transactions and compliance.",
  },
  {
    id: 3,
    expertiesName: "Family Law",
    expertiesIcon: <MdFamilyRestroom size={40} />,
    expertiesDescription:
      "Our family attorneys have extensive experience in commercial and residential transactions, zoning, and development.",
  },
];

export const familyLaw = [
  {
    id: 1,
    familyLawTitle: "Divorce",
    familyLawDescription:
      "Our experienced attorneys will guide you through the divorce process, ensuring your rights are protected.",
  },
  {
    id: 2,
    familyLawTitle: "Child Custody",
    familyLawDescription: "We will fight for your parental rights and the best interests of your children.",
  },
  {
    id: 3,
    familyLawTitle: "Adoption",
    familyLawDescription:
      "Our team will guide you through the complex adoption process, ensuring a smooth and successful outcome.",
  },
];

export const civilLaw = [
  {
    id: 1,
    civilLawTitle: "Personal Injury",
    civilLawDescription:
      "If you've been injured due to someone else's negligence, we will fight to get you the compensation you deserve.",
  },
  {
    id: 2,
    civilLawTitle: "Real Estate",
    civilLawDescription:
      "Our team can assist with a variety of real estate matters, including property disputes, transactions, and zoning issues.",
  },
  {
    id: 3,
    civilLawTitle: "Contract Disputes",
    civilLawDescription:
      "We will help you navigate contract disputes and negotiate the best possible outcome for your case.",
  },
];

export const corporateLaw = [
  {
    id: 1,
    corporateLawTitle: "Entity Formation",
    corporateLawDescription:
      "We can assist with the formation of corporations, limited liability companies, partnerships, and other business entities.",
  },
  {
    id: 2,
    corporateLawTitle: "Mergers & Acquisitions",
    corporateLawDescription:
      "Our team can guide you through the complex process of mergers and acquisitions, ensuring your interests are protected.",
  },
  {
    id: 3,
    corporateLawTitle: "Regulatory Compliance",
    corporateLawDescription:
      "We can help your business navigate the ever-changing landscape of regulations and ensure your compliance.",
  },
];
