db.voos.findOne({ $and: [{ litrosCombustivel: { $lte: 1000 } }, 
  { litrosCombustivel: { $exists: 1 } }] }, { vooId: 1, _id: 0, litrosCombustivel: 1 });
