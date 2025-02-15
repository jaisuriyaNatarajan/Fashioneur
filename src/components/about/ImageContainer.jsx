import React from "react";
import styled from "styled-components";

const CollectionGrid = ({ collections }) => {
  console.log(collections, "foxx");

  const groupedCollections = collections.reduce((acc, collection) => {
    const category = collection.category || "Uncategorized"; // Default if no category
    if (!acc[category]) acc[category] = [];
    acc[category].push(collection);
    return acc;
  }, {});

  return (
    <Container>
      {Object.keys(groupedCollections).map((category, index) => (
        <CategorySection key={index}>
          <Grid>
            {groupedCollections[category].map((collection, i) => (
              <CollectionCard key={i} collection={collection} />
            ))}
          </Grid>
        </CategorySection>
      ))}
    </Container>
  );
};

// URL.createObjectURL(img)
const CollectionCard = ({ collection }) => (
  <CardContainer>
    <Card>
      <div className="uploaded-details">
        <div className="uploaded-time">{`2 months ago . Jennifer ${collection.category}`}</div>
        <div className="title">{collection.title}</div>
      </div>
      <div className="Details">
        I carefully select foundation and concealer shades..
      </div>
      <Images>
        {collection.images.map((img, i) => (
          <img key={i} src={img} alt="Upload" />
        ))}
      </Images>
    </Card>
  </CardContainer>
);

const CardContainer = styled.div`
  display: flex;
`;
const Container = styled.div`
  padding: 5px 20px;
  max-height: 350px;
  max-width: 261px;
  display: flex;
  gap: 20px;
`;

const CategorySection = styled.div`
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #333;
  padding: 10px;
  border-radius: 8px;
  color: white;
  font-weight: 400;
  font-size: 10px;
  line-height: 10.51px;

  .uploaded-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 5px;
  }

  .uploaded-time {
    font-weight: 400;
    font-size: 8px;
    line-height: 7.51px;
    color: #b1b1b3;
  }

  .title {
    font-weight: 400;
    font-size: 12px;
    line-height: 10.51px;
    color: #fafafa;
    height: 11px;
  }

  .Details {
    font-weight: 500;
    font-size: 10px;
    line-height: 9.01px;
    letter-spacing: 0%;
    color: #adadaf;
    height: 12px;
    margin-bottom: 4px;
  }
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;

  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export default CollectionGrid;
