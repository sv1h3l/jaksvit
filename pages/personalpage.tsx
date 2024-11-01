import Image from "next/image";
import JTab from "@/components/personalpagecomponents/JTab";
import JGrid from "@/components/personalpagecomponents/JGrid";
import { useEffect, useState } from "react";
import JList from "@/components/personalpagecomponents/JList";

export default function PersonalPage() {
    const [isCzech, setIsCzech] = useState(false);

    interface GeneralData {
        key: string;
        goldValue?: string;
        primaryValue: string;
        secondaryValue?: string;
    }

    interface PersonalPageGeneralData {
        education: GeneralData[];
        employment: GeneralData[];
        certificates: GeneralData[];
        skills: GeneralData[];
    }

    interface ProjectsData {
        header: string;
        label: string;
        company: boolean;
        job: string;
        firstCard: boolean;
        values: string[];
    }

    interface PersonalPageProjectsData {
        companyHella: ProjectsData;
        projectUnitExplorer: ProjectsData;
        projectProjectServer: ProjectsData;
        diplomaThesis: ProjectsData;
        bachelorThesis: ProjectsData;
    }

    const [personalPageGeneralData, setPersonalPageGeneralData] = useState<PersonalPageGeneralData | null>(null);

    const [personalPageProjectsData, setPersonalPageProjectsData] = useState<PersonalPageProjectsData | null>(null);

    useEffect(() => {
        fetch(isCzech ? "/data/personalPageGeneralDataCZ.json" : "/data/personalPageGeneralDataEN.json")
            .then((response) => response.json())
            .then((data) => setPersonalPageGeneralData(data))
            .catch((error) => console.error("Error fetching general data:", error));

        fetch(isCzech ? "/data/personalPageProjectsDataCZ.json" : "/data/personalPageProjectsDataEN.json")
            .then((response) => response.json())
            .then((data) => setPersonalPageProjectsData(data))
            .catch((error) => console.error("Error fetching projects data:", error));
    }, [isCzech]);

    return (
        <main className="bg-[#3C3D37] min-h-screen px-1 lg:px-2">
            <div className="flex w-full flex-col pb-1 lg:pb-2 text-gray-200 items-center">
                <div
                    className="bg-[#161513] border-t-2 relative border-[#b7a71d] rounded-b-3xl px-3 pt-1 pb-1 sm:px-6 sm:py-5  sm:gap-2 md:gap-4 items-center justify-center
                  max-w-lg flex flex-col sm:flex-row "
                >
                    <Image
                        className="w-24  my-1"
                        src={"/images/profile_picture.png"}
                        alt="Profile picture"
                        width={100}
                        height={100}
                        priority
                    />

                    <div className="flex flex-col items-center sm:pt-1 h-22 sm:mr-1 scale-90 sm:scale-100">
                        <h1 className=" font-bold text-4xl sm:px-2 pb-1 text-nowrap">Jakub Švihel</h1>

                        <Image
                            className="w-52 scale-[1.04]"
                            src="/images/line.svg"
                            width={215}
                            height={0}
                            alt="Line"
                        />

                        <h2 className={`font-bold pr-1  ${isCzech ? "text-xl pt-1" : "text-lg "}`}>FULL-STACK {isCzech ? "VÝVOJÁŘ" : "DEVELOPER"}</h2>
                    </div>

                    <button
                        className="absolute right-0 top-0 text-sm font-bold h-6 scale-90 w-8 pl-1 pb-6 rounded-bl-xl   outline outline-1 outline-[#2b2b27] border-b-2 border-b-[#b7a71d]  border-t-2 border-t-transparent hover:border-t-[#b7a71d] transition duration-200 ease-in-out  items-end"
                        onClick={() => setIsCzech(!isCzech)}
                    >
                        {isCzech ? "EN" : "CS"}
                    </button>
                </div>

                <JTab
                    label={isCzech ? "o mně" : "about me"}
                    imageSrc="about_me"
                    imageAlt="About me icon"
                >
                    <div className="px-1 sm:px-3 pt-3 lg:text-center ">
                        <p className="inline mr-1 lg:block">
                            {isCzech ? "Mám velkou vášeň pro informační technologie, zejména pro tvorbu webových stránek a aplikací." : "I have a strong passion for information technologies, particularly in creating websites and applications."}
                        </p>
                        <p className="inline mr-1 lg:block">
                            {isCzech ? "Důležité je pro mě celoživotní vzdělávání a v každodenním životě si cením jednoduchosti minimalismu." : "Lifelong learning is important to me, and I value the simplicity of minimalism in my daily life."}
                        </p>
                        <p className="inline mr-1 lg:block">{isCzech ? "Fitness je klíčovým aspektem mé rutiny a také jsem nadšenec do investování." : "Fitness is a key aspect of my routine, and I’m also enthusiastic about investing."}</p>
                        <p className="inline mr-1 lg:block">
                            {isCzech ? "Kromě toho mě fascinuje Japonsko a jeho bohatá kultura, která mě v mnohém inspiruje." : "Additionally, I am fascinated by Japan and its rich culture, which inspires me in many ways."}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row mt-5 gap-4 sm:gap-20 lg:gap-10 justify-center items-start sm:items-center ml-1 mb-1">
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 w-60 sm:w-auto">
                            <div className="flex items-center gap-2">
                                <button
                                    className="px-1 rounded-lg size-8 outline outline-1 outline-[#2b2b27] border-b-2 border-b-[#b7a71d]  border-t-2 border-t-transparent hover:border-t-[#b7a71d] transition duration-200 ease-in-out"
                                    onClick={() => (window.location.href = "tel:+420733249479")}
                                >
                                    <Image
                                        className="w-24"
                                        src={`/icons/call.svg`}
                                        alt=""
                                        width={30}
                                        height={0}
                                    />
                                </button>
                                <span>+420 733 249 479</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    className="px-1 rounded-lg size-8 outline outline-1 outline-[#2b2b27] border-b-2 border-b-[#b7a71d]  border-t-2 border-t-transparent hover:border-t-[#b7a71d] transition duration-200 ease-in-out"
                                    onClick={() => (window.location.href = "mailto:jakub.svihel@gnj.cz")}
                                >
                                    <Image
                                        className="w-24"
                                        src={`/icons/mail.svg`}
                                        alt=""
                                        width={30}
                                        height={0}
                                    />
                                </button>
                                <span>jakub.svihel@gnj.cz</span>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 w-60 sm:w-auto">
                            <div className="flex items-center gap-2">
                                <button
                                    className="py-1 rounded-lg size-8 flex items-center justify-center outline outline-1 outline-[#2b2b27] border-b-2 border-b-[#b7a71d]  border-t-2 border-t-transparent hover:border-t-[#b7a71d] transition duration-200 ease-in-out"
                                    onClick={() => (window.location.href = "https://www.linkedin.com/in/svihel-jakub")}
                                >
                                    <Image
                                        className="w-24 p-1"
                                        src="/icons/in.svg"
                                        alt="LinkedIn icon"
                                        height={0}
                                        width={28}
                                    />
                                </button>
                                <span className="text-nowrap">linkedin.com/in/svihel-jakub</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    className="py-1 rounded-lg size-8 flex items-center justify-center outline outline-1 outline-[#2b2b27] border-b-2 border-b-[#b7a71d]  border-t-2 border-t-transparent hover:border-t-[#b7a71d] transition duration-200 ease-in-out"
                                    onClick={() => (window.location.href = "https://www.github.com/sv1h3l")}
                                >
                                    <Image
                                        className="w-24 p-1"
                                        src="/icons/git.svg"
                                        alt="GitHub icon"
                                        width={26}
                                        height={0}
                                    />
                                </button>
                                <span>github.com/sv1h3l</span>
                            </div>
                        </div>
                    </div>
                </JTab>

                <JTab
                    label={isCzech ? "zaměstnání" : "employment"}
                    imageSrc="employment"
                    imageAlt="Employment icon"
                >
                    {personalPageGeneralData && <JGrid gridArray={personalPageGeneralData?.employment} />}
                </JTab>

                <JTab
                    label={isCzech ? "dovednosti" : "skills"}
                    imageSrc="skills"
                    imageAlt="Skills icon"
                >
                    {personalPageGeneralData && <JGrid gridArray={personalPageGeneralData?.skills} />}
                </JTab>

                <JTab
                    label={isCzech ? "vzdělání" : "education"}
                    imageSrc="education"
                    imageAlt="Education icon"
                >
                    {personalPageGeneralData && <JGrid gridArray={personalPageGeneralData?.education} />}
                </JTab>

                <JTab
                    label={isCzech ? "certifikáty" : "certificates"}
                    imageSrc="certificates"
                    imageAlt="Certificates icon"
                >
                    {personalPageGeneralData && <JGrid gridArray={personalPageGeneralData?.certificates} />}
                </JTab>

                <Image
                    className="pt-3 px-16 lg:pt-4"
                    src="/images/line.svg"
                    width={750}
                    height={0}
                    alt="Line"
                />

                <JTab
                    label={isCzech ? "komerční sféra" : "commercial sphere"}
                    imageSrc="employment"
                    imageAlt="Employment icon"
                >
                    {personalPageProjectsData ? (
                        <>
                            <JList
                                header={personalPageProjectsData.companyHella.header}
                                label={personalPageProjectsData.companyHella.label}
                                company={personalPageProjectsData.companyHella.company}
                                job={personalPageProjectsData.companyHella.job}
                                firstCard={personalPageProjectsData.companyHella.firstCard}
                                isCzech={isCzech}
                                values={personalPageProjectsData.companyHella.values}
                            >
                                <> </>
                            </JList>

                            <JList
                                header={personalPageProjectsData.projectUnitExplorer.header}
                                label={personalPageProjectsData.projectUnitExplorer.label}
                                company={personalPageProjectsData.projectUnitExplorer.company}
                                firstCard={personalPageProjectsData.projectUnitExplorer.firstCard}
                                values={personalPageProjectsData.projectUnitExplorer.values}
                            >
                                <></>
                            </JList>

                            <JList
                                header={personalPageProjectsData.projectProjectServer.header}
                                label={personalPageProjectsData.projectProjectServer.label}
                                company={personalPageProjectsData.projectProjectServer.company}
                                firstCard={personalPageProjectsData.projectProjectServer.firstCard}
                                values={personalPageProjectsData.projectProjectServer.values}
                            >
                                <></>
                            </JList>
                        </>
                    ) : (
                        <></>
                    )}
                </JTab>

                <JTab
                    label={isCzech ? "akademická sféra" : "academic sphere"}
                    imageSrc="education"
                    imageAlt="Education icon"
                >
                    {personalPageProjectsData ? (
                        <>
                            <JList
                                header={personalPageProjectsData.diplomaThesis.header}
                                label={personalPageProjectsData.diplomaThesis.label}
                                company={personalPageProjectsData.diplomaThesis.company}
                                firstCard={personalPageProjectsData.diplomaThesis.firstCard}
                                values={personalPageProjectsData.diplomaThesis.values}
                            >
                                <></>
                            </JList>

                            <JList
                                header={personalPageProjectsData.bachelorThesis.header}
                                label={personalPageProjectsData.bachelorThesis.label}
                                company={personalPageProjectsData.bachelorThesis.company}
                                firstCard={personalPageProjectsData.bachelorThesis.firstCard}
                                values={personalPageProjectsData.bachelorThesis.values}
                            >
                                <div className="flex justify-center sm:justify-normal gap-12 mb-6">
                                    <button
                                        className="px-3  text-sm font-bold py-1  rounded-xl outline outline-1 outline-[#2b2b27] border-b-2 border-b-[#b7a71d]  border-t-2 border-t-transparent hover:border-t-[#b7a71d] transition duration-200 ease-in-out  items-center"
                                        onClick={() => (window.location.href = "https://youtu.be/hQASELXYlSs")}
                                    >
                                        {isCzech ? "VIDEO UKÁZKA" : "VIDEO SAMPLE"}
                                    </button>

                                    <button
                                        className=" px-3 text-sm font-bold py-1 rounded-xl outline outline-1 outline-[#2b2b27] border-b-2 border-b-[#b7a71d]  border-t-2 border-t-transparent hover:border-t-[#b7a71d] transition duration-200 ease-in-out  items-center"
                                        onClick={() => (window.location.href = "https://theses.cz/id/z1m772/doc.pdf")}
                                    >
                                        {isCzech ? "DOKUMENTACE" : "DOCUMENTATION"}
                                    </button>
                                </div>

                                <Image
                                    className="mb-4 rounded-lg mt-4"
                                    src="/images/paziak.png"
                                    width={1000}
                                    height={0}
                                    alt="Line"
                                />
                                <Image
                                    className="mb-4 rounded-lg"
                                    src="/images/inventory.png"
                                    width={1000}
                                    height={0}
                                    alt="Line"
                                />
                                <Image
                                    className="mb-4 rounded-lg"
                                    src="/images/migrate.png"
                                    width={1000}
                                    height={0}
                                    alt="Line"
                                />
                                <Image
                                    className="rounded-lg"
                                    src="/images/map.png"
                                    width={1000}
                                    height={0}
                                    alt="Line"
                                />
                            </JList>
                        </>
                    ) : (
                        <></>
                    )}
                </JTab>
            </div>
        </main>
    );
}
