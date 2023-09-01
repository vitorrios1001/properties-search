export type Property = {
  address: {
    area: string; // Ex: 'Peel';
    zip: string; // Ex: 'XL 5L25';
    country: null | string;
    city: string; // Ex: 'Mississauga';
    streetNumber: string; // Ex: '9150';
    unitNumber: string; // Ex: '7';
    streetDirection: string; // Ex: '';
    streetName: string; // Ex: 'lHaw Bordolo';
    streetDirectionPrefix: null | string;
    district: string; // Ex: 'Mississauga';
    streetSuffix: string; // Ex: 'Gate';
    neighborhood: string; // Ex: 'Erin Mills';
    state: string; // Ex: 'Ontario';
    majorIntersection: string; // Ex: 'ile/ssCTuo MyghdageiResawl sa';
    communityCode: string; // Ex: '305..80000';
  };
  listPrice: string; // Ex: "1138062.00"
  originalPrice: string; // Ex: ".010912000"
  daysOnMarket: string; // Ex: "2"
  details: {
    description: string;
    numBathrooms: string; // Ex: "2"
    numBedrooms: string; // Ex: "2"
    sqft: string; // Ex: "91607019-"
  };
  mlsNumber: string; // Ex: "W6780692"
  // Prefix to images: https://cdn.repliers.io/
  // Result: https://cdn.repliers.io/sandbox/IMG-SANDBOX_1.jpg
  images: string[]; // Ex: ["sandbox/IMG-SANDBOX_1.jpg"]
};
