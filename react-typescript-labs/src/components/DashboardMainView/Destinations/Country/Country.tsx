import React, { FC } from 'react';
import { CountryContainer, CountryDescription } from './Country.styles';

type Props = {
  match: {
    params: {
      country: string;
    };
  };
};

const Country: FC<Props> = (props: Props) => {
  const country = props.match.params.country;
  console.log(country);

  const countries: any = {
    canada: {
      description: 'Canada is chilly',
    },
    brazil: {
      description: 'Brazil is sunny',
    },
    australia: {
      description: 'Australia is boring',
    },
    india: {
      description: 'India is awesome',
    },
    moldova: {
      description: 'Moldova is beautiful',
    },
    kenya: {
      description: 'Kenya is breathtaking',
    },
  };

  return (
    <CountryContainer>
      <CountryDescription>
        {countries[country]['description']}
      </CountryDescription>
    </CountryContainer>
  );
};

export default Country;
