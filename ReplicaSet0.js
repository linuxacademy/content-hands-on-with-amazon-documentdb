db = connect( 'mongodb://localhost/test' );

rs.initiate( {
   _id : "ReplicaSet0",
   members: [
      { _id: 0, host: "10.0.0.101:27017" }
   ]
})

