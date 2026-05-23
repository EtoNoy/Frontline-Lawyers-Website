import { Shield, Key, Car, Pill, Home, Gavel, Hand, Wine, Navigation, ArrowUpRight, Skull, Megaphone, Landmark, DollarSign, Eye, AlertCircle, UserX, AlertTriangle, ShieldCheck, Laptop } from 'lucide-react';

export interface PracticeArea {
  slug: string;
  icon: any;
  title: string;
  desc: string;
  urgency: string;
  severity: string;
  fullDescription: string;
}

export const practiceAreasData: PracticeArea[] = [
  { 
    slug: "police-matters", 
    icon: Shield, 
    title: "Police Matters", 
    desc: "Critical legal advice for any interactions with law enforcement personnel.",
    urgency: "Immediate action required. Do not participate in any questioning, informal chats, or formal video-recorded interviews without prior counsel. The window to establish your refusal to speak is during the very first contact.",
    severity: "Variable from minor warnings to sudden arrest, physical custody, and full-scale prosecution. Anything said can be used to construct a prima facie case against you, making a convictions stain on your record highly probable.",
    fullDescription: "When law enforcement contacts you, they are rarely just gathering neutral information; they are constructing a case brief. If you are asked to attend a station for a 'voluntary' chat or find yourself detained, you are at a high-risk legal junction. Statements made in panic or without advice frequently waive your privileges and cannot be retracted later. You must firmly and politely state that you are exercising your absolute legal right to physical silence and decline to answer any questions or participate in a trial of facts until you have secured private legal counsel."
  },
  { 
    slug: "bail-matters", 
    icon: Key, 
    title: "Bail Matters", 
    desc: "Immediate strategic representation for Supreme and local court bail applications.",
    urgency: "Extreme and critical. If bail is refused at the initial hearing, you may be remanded in a high-security prison facility for several months to over a year while the crown prepares their evidence brief.",
    severity: "Immediate and total deprivation of personal liberty. A refused application impacts your ability to work, support your family, and prepare your legal defense, while exposing you to harsh correctional environments.",
    fullDescription: "A bail application is often a singular, high-stakes opportunity under strict bail laws. If you are arrested, you may be held overnight before being brought to court. A poorly prepared bail attempt that is refused restricts your ability to apply again unless you can show a major change in circumstances. What you must do is immediately refuse to agree to police bail refusals without representation, ensure family or contacts assemble robust sureties, propose strict bail conditions (such as daily reporting, home detention, or electronic monitoring), and have a strategic objection prepared to address any show-cause requirements or unacceptable risks raised."
  },
  { 
    slug: "licence-matters", 
    icon: Car, 
    title: "Licence Matters", 
    desc: "Managing RMS suspension appeals and protecting your driving privileges.",
    urgency: "Highly time-sensitive. Administrative appeal windows for police-issued suspensions or Transport agency decisions are strictly limited, usually requiring paperwork to be filed within 28 days of notice.",
    severity: "Immediate loss of all transit capabilities, which frequently causes rapid termination of employment, inability to run businesses, loss of family care mobility, and subsequent driving-while-suspended charges.",
    fullDescription: "Losing your privilege to drive is more than an inconvenience; it can destroy your livelihood. When police suspend your license on the spot or you receive an RMS suspension notice, the judicial path is narrow. If you drive while suspended, you face catastrophic penalties including mandatory jail terms. You should immediately identify the precise category of your suspension, secure comprehensive proof of your exceptional driving dependency and professional requirements, compile a clean character portfolio, and lodge a formal local court appeal before the legal deadline expires."
  },
  { 
    slug: "drug-offences", 
    icon: Pill, 
    title: "Drug Possession or Supply Matters", 
    desc: "Strategic defense against charges of possession, supply, and drug trafficking.",
    urgency: "High. Promptly challenge search methodologies. Obtaining expert analysis of drug weights and chemistry must occur before the police submit their scientific certifying documents to the court.",
    severity: "Ranges from heavy statutory fines and a permanent criminal record to mandatory custodial sentences. Supply charges can invoke massive asset forfeitures, border travel bans, and financial freezes.",
    fullDescription: "Drug charges are pursued aggressively, with law enforcement relying heavily on searches and deeming provisions where possession of a certain quantity is legally presumed to be for supply. A conviction can permanently destroy your chances of international travel, corporate employment, and professional licensing. You should immediately demand a copy of the police search warrant, refuse to consent to any searches of your phone, home, or vehicle, and coordinate a systematic challenge of the physical and constructive possession requirements, assessing whether the police acted outside their search powers."
  },
  { 
    slug: "domestic-violence", 
    icon: Home, 
    title: "Domestic Violence Matters", 
    desc: "Representation for complex domestic allegations and related court orders.",
    urgency: "High. Immediate restrictions on residence, family contacts, and child access are typically active immediately upon police intervention, requiring strategic counter-steps in the local court.",
    severity: "Highly severe. Risks include a permanent criminal conviction, loss of custody, forced eviction from your home under active AVOs, weapon prohibitions, and substantial terms of imprisonment.",
    fullDescription: "Domestic violence allegations trigger rapid, mandatory police protocols that can instantly uproot your life. Standard police policy is to arrest first and investigate later, often leading to immediate Apprehended Violence Orders (AVOs) with strict exclusion terms. If you breach an order—even accidentally via email or text—you face near-automatic arrest and potential custody. What you must do is immediately preserve all text messages, call logs, geo-location data, and social media records, avoid any direct or indirect contact with the complainant, and prepare to contest the allegations or negotiate manageable conditions that preserve your basic civil liberties."
  },
  { 
    slug: "court-hearings-trials", 
    icon: Gavel, 
    title: "Court Hearings and Trials", 
    desc: "Rigorous trial preparation and courtroom defense.",
    urgency: "High. Trial dates are set months in advance, but evidence auditing, cross-examination plans, and defense subpoena issuance must be executed months prior to entering the courtroom.",
    severity: "The ultimate platform of legal determination. Failing a trial results in immediate conviction, public reputational ruin, and direct sentence structuring that often involves physical imprisonment.",
    fullDescription: "A criminal trial or contested hearing is the final threshold of your defense. Entering a trial without a deeply prepared strategy is incredibly high-risk. The prosecution will leverage their full range of resources, witnesses, and experts. You must ensure that every piece of state evidence is analyzed for admissibility, that witness statements are meticulously cross-referenced for fatal inconsistencies, and that subpoenas are drafted to force the disclosure of external records, such as police communication logs, CCTV, and electronic data."
  },
  { 
    slug: "assault-charges", 
    icon: Hand, 
    title: "Assault Charges", 
    desc: "Defense against common assault, bodily harm, and serious glassing offenses.",
    urgency: "High. Secure nearby CCTV records, private dashcam files, and independent witness details before they are deleted or recollections fade. Police often only secure evidence supporting their claim.",
    severity: "Significant. From minor common assault to grievous bodily harm (GBH), penalties range from criminal records and intense supervision programs to mandatory custodial terms of up to 10 years.",
    fullDescription: "An assault charge can arise from incredibly brief physical altercations, and the prosecution is legally bound to pursue these to the highest extent of the law. You are facing severe risks to your livelihood and reputation, as violence-related convictions exclude you from numerous industries. You must gather all evidence of the physical context of the incident, seek medical records of any injuries you sustained, and prepare a defense framework centered on self-defense, provocation, accident, or establishing that the alleged victim was the primary aggressor."
  },
  { 
    slug: "drink-driving-dui", 
    icon: Wine, 
    title: "Drink Driving/DUI", 
    desc: "Minimizing license disqualifications and avoiding criminal records.",
    urgency: "High. Mandatory immediate suspension of your license by police usually takes effect instantly, meaning you must quickly assess options for work-permissible driving appeals.",
    severity: "Severe. Includes dynamic fines, the mandatory installation of breathalyzer interlocks in your car, automatic license disqualification, and a permanent criminal record.",
    fullDescription: "Prescribed Concentration of Alcohol (PCA) and DUI offenses are heavily regularized with mandatory minimum disqualification regimes. The court's starting point is often conviction and suspension. To avoid a lifetime criminal record and permanent disruption of your life, you should quickly complete traffic rehabilitation programs, obtain psychological or character profiles, and assemble evidence showing why a criminal conviction would cause exceptional and disproportionate professional collapse."
  },
  { 
    slug: "traffic-offences", 
    icon: Navigation, 
    title: "Traffic Offences", 
    desc: "Defense for speeding issues, negligent driving, or running camera offenses.",
    urgency: "Moderate. Appeal or court-election deadlines must be strictly managed before the notice of infringement converts into an automatic administrative conviction and demerit capture.",
    severity: "Moderate to high. Unchecked demerit accumulation results in long-term professional transit bans, substantial fines, and high insurance premiums.",
    fullDescription: "Traffic charges such as negligent driving, dangerous speed, or driving while suspended require precise navigation. Simply paying a fine is an admission of guilt that captures demerit points. What you must do is critically analyze the technical methods used by the police (such as radar calibrations, visual estimation errors), document driving environments with photos or video, and decide whether a court election is necessary to seek a non-conviction dismissal."
  },
  { 
    slug: "appeals", 
    icon: ArrowUpRight, 
    title: "Appeals", 
    desc: "Appealing severe court sentences or wrongful criminal convictions.",
    urgency: "Critical. Strict statutory timelines apply, normally requiring formal application and grounds of appeal documents to be lodged within 28 days of the original sentencing date.",
    severity: "The final safety net in the judicial system. Failing an appeal leaves you bound to an unjust conviction, immediate custodial sentence, and catastrophic civil damage.",
    fullDescription: "If custom local court proceedings lead to a devastating sentence or wrongful conviction, you are entitled to appeal. However, an appeal is not a simple re-hearing; it requires establishing specific errors of fact, law, or proving that a penalty is manifestly excessive. You must secure complete copies of the audio transcripts of the original proceedings, review the magistrate's sentencing remarks, and structure narrow arguments focused on the misapplication of sentencing principles or the misinterpretation of evidence."
  },
  { 
    slug: "murder-charges", 
    icon: Skull, 
    title: "Murder Charges", 
    desc: "Strategic defense structures for homicide and manslaughter allegations.",
    urgency: "Extreme and absolute. Immediate, proactive evidence preservation and independent autopsy audits must be arranged as soon as you are aware of police interest.",
    severity: "Maximum. The risk is life imprisonment, with long-term placement in high-security correctional institutions, complete civil isolation, and total personal ruin.",
    fullDescription: "A charge of murder is the most serious charge in the legal code, bringing the full resources of the state's homicide squad against you. Navigating this demands a total deep-dive. You should expect complex forensic, ballistic, pathology, and digital tracking evidence to be presented. What you must do is remain absolutely silent, reject any police interaction, and insist on a comprehensive audit of of the crown's scientific timeline, preparing to raise absolute defenses such as self-defense, mental impairment, or lack of critical intent."
  },
  { 
    slug: "public-nuisance", 
    icon: Megaphone, 
    title: "Public Nuisance Offences", 
    desc: "Defense for public order offences, resisting arrest, and offensive behavior.",
    urgency: "Moderate. Immediate legal negotiation with police prosecutors can resolve these issues before they reach a formal magistrate, preventing avoidable court dates.",
    severity: "Low to moderate, but carries the real risk of a permanent criminal record that can compromise child-care qualifications, corporate recruitment, and international travel.",
    fullDescription: "Charges of public nuisance, offensive language, or resisting police arrest are often highly subjective, stemming from police overreach during street-level interactions. If you plead guilty, you receive a record that looks terrible to prospective employers. You must secure clear statements from bystanders, examine any audio or police body-worn video recordings of your interaction, and challenge whether your actions occurred within the strict statutory definitions of being offensive or obstructive."
  },
  { 
    slug: "centrelink-fraud", 
    icon: Landmark, 
    title: "Centrelink Fraud", 
    desc: "Representation for Commonwealth audit actions and benefit fraud.",
    urgency: "High. Do not participate in Commonwealth phone audits or formal administrative interviews without legal advice. Statements made during audits are used as primary prosecution admissions.",
    severity: "Severe. Commonwealth fraud offenses carry highly critical sentencing guidelines, often resulting in heavy restitution bills, asset confiscations, and federal jail terms.",
    fullDescription: "Commonwealth prosecutions are backed by immense data-matching capabilities, matching bank records, taxi driving logs, and employment details. If you are accused of failing to declare income or over-claiming benefits, you face federal charges. What you must do is refuse to participate in any voluntary phone reviews, gather all historical financial statements, and analyze whether administrative mistakes, mental health issues, or domestic pressures can negate allegations of deliberate deception."
  },
  { 
    slug: "money-laundering", 
    icon: DollarSign, 
    title: "Money Laundering and Proceeds of Crime", 
    desc: "Defending financial audits and complex corporate criminal charges.",
    urgency: "Extreme. High-level financial freeze orders are applied immediately to all accessible bank accounts, home mortgages, and active businesses, requiring prompt court challenges.",
    severity: "Devastating. Complete forfeiture of your personal assets, bank closures, irreversible business ruin, and severe physical custodial sentences.",
    fullDescription: "Proceeds of crime legislation allows the government to freeze your entire life's earnings based on mere suspicion of illegal association or undeclared income. Challenging these orders represents a highly technical process. You must secure independent tax and accounting experts, isolate legal transactions, and prove that your properties and funds have a totally legitimate, legal origin to have freeze orders lifted."
  },
  { 
    slug: "stalk-intimidation", 
    icon: Eye, 
    title: "Stalk or Intimidation", 
    desc: "Defense against cyber harassment and personal intimidation allegations.",
    urgency: "High. Phone records, social media accounts, and text messages should be immediately secured, protected, and backed up before they can be altered or lost.",
    severity: "High risk. Results in immediate local court AVO protection orders and potential custodial sentences, alongside permanent bans on possessing security licenses.",
    fullDescription: "Under modern threat laws, even minor communications or perceived patterns of monitoring can form the basis of a stalking charge. The definitions are extremely subjective. Your reputation is at immediate risk. You should preserve all contextual texts and messages, refrain from deleting any online interactions, and compile location data (like Google Timeline records) to show that any physical co-presence was entirely coincidental."
  },
  { 
    slug: "manslaughter", 
    icon: AlertCircle, 
    title: "Manslaughter", 
    desc: "Advocacy for complex negligence and accidental death trials.",
    urgency: "Extreme. Securing medical, mechanical, and safety reports from independent safety professionals must occur immediately before the state controls the crash site or testing area.",
    severity: "Very severe. Custodial terms range from several years to life, accompanied by complete professional collapse and crushing civilian negligence lawsuits.",
    fullDescription: "Manslaughter charges cover a complex range of accusations—including vehicular negligence, workplace oversights, or accidental contact. If you are accused, the prosecution must establish a direct chain of causation and a criminal level of neglect. You must ensure that all mechanical, technical, and medical data from the event is analyzed by independent specialists, and refuse to participate in any reconstructive simulations organized by investigators."
  },
  { 
    slug: "rape-sexual-assault", 
    icon: UserX, 
    title: "Rape/Sexual Assault", 
    desc: "Meticulous defense structuring for serious allegations of sexual assault.",
    urgency: "Extreme. Absolute immediate legal consultation is mandatory. Do not reply to any social media contact, text messages, or calls from the complainant, as police often use configured 'pretext conversations' to record admissions.",
    severity: "Catastrophic. Lengthy mandatory minimum jail sentences, lifetime entry onto the sex offender registry, immediate employment termination, and total social ruin.",
    fullDescription: "In sexual assault matters, the trial is highly emotionally charged and rests primarily on the word of one person against another. A conviction will destroy your life forever. You should immediately block all contact, preserve every single text, Snapchat, or DM thread, and document a precise, objective chronological history of the relationship to expose discrepancies, exaggerations, or motives to fabricate."
  },
  { 
    slug: "avo", 
    icon: AlertTriangle, 
    title: "AVO", 
    desc: "Responding to and defending Apprehended Violence Orders.",
    urgency: "High. The initial court appearance for an interim order occurs within days of service, requiring rapid preparation to secure a workspace or residential access exception.",
    severity: "Significant. Restricts travel, working with children certificates, firearms licenses, and is a civil mark that converts into near-mandatory criminal charges if violated.",
    fullDescription: "An Apprehended Violence Order is a civil instrument, but it has severe, life-altering ramifications. Many individuals make the mistake of consenting to an AVO 'without admissions' to avoid court, only to find themselves prohibited from standard employment or arrested later over simple allegations of email contact. You must contest vexatious AVOs, compile evidence showing bad faith or Ulterior motives by the complainant, and ensure you do not violate any interim conditions."
  },
  { 
    slug: "self-defence", 
    icon: ShieldCheck, 
    title: "Self Defence", 
    desc: "Defending charges by proving proportional reaction and self-preservation.",
    urgency: "High. Gathering audio files, securing visual CCTV angles, and getting prompt forensic photography of your own defensive injuries is vital before evidence is modified.",
    severity: "Critical core element. Proving self-defense operates as an absolute barrier to conviction, completely dismissing assault and bodily harm charges.",
    fullDescription: "Self-defense is a powerful, absolute defense under the law. Once raised, the crown must prove beyond a reasonable doubt that your actions were not an act of self-defense. If they cannot, you must be acquitted. You must carefully document the disparity in size, threat level, and weapons of the party who attacked you, and gather independent character records establishing your non-violent disposition."
  },
  { 
    slug: "cybercrime", 
    icon: Laptop, 
    title: "Cybercrime", 
    desc: "Defense against digital hacking, financial data breaches, and tracking crimes.",
    urgency: "High. Ensure immediate backup, digital custody, and professional encryption logs of all hard drives, routers, and cloud directories are captured before police seizure.",
    severity: "High. Serious federal prison sentences, complete forfeiture of computing hardware, and permanent restrictions on personal internet access and device possession.",
    fullDescription: "Modern cybercrime charges rely heavily on automated tracking, IP address logging, and digital forensics. However, digital evidence is notoriously fragile and vulnerable to third-party access, malware, or household network sharing. You must refuse to disclose computer or device passcodes to law enforcement without advice, and prepare to enlist digital forensic specialists to trace logs and verify whether external access compromised your hardware."
  }
];
