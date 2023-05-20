import SongCard from './SongCard';

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <h1 className="text-2xl font-semibold mb-5">{titleText}</h1>
      <div className="w-full flex justify-between space-x-4">
        {
          // Map the card data
          cardsData.map((card) => {
            return (
              <SongCard
                title={card.title}
                description={card.description}
                imgUrl={card.imgUrl}
                key={Math.random()}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default PlaylistView;
