interface ProblemHeaderProps {
    teamName: string;
    imageSrc?: string;
}

const ProblemHeader: React.FC<ProblemHeaderProps> = ({ teamName, imageSrc }) => {
    return (
        <div>
            <span className="px-4 py-2 text-xl font-semibold absolute top-4 left-4">
                {teamName}
            </span>
            <img src={imageSrc} alt="" className="absolute top-2 right-2 w-28" />
        </div>
    );
};

export default ProblemHeader;
