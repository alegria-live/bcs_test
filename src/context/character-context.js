import React from 'react';
const characterContext = React.createContext({
    characterId: null,
    setCharacterId: () => {},
});
export default characterContext;