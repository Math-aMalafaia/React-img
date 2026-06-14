import "./HistoryCard.css";

interface HistoryCardProps{
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

export default function HistoryCards({
    title,
    subtitle,
    description,
    image,
}: HistoryCardProps) {
    return(
        <section className="history-card">
            <div className="history-card_image">
                <img src={image} alt="title" />
            </div>

            <div className="history-card_content">
                <h2>{title}</h2>

                <h3>{subtitle}</h3>

                <p>{description}</p>
            </div>
        </section>
    );
}