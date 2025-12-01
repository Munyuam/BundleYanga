const getNetworkColor = (network) => {
  if (network.toLowerCase() === "airtel") return "#E63631"; 
  if (network.toLowerCase() === "tnm") return "#4CA536";   
  return "#6B7280"; 
};

module.exports = getNetworkColor