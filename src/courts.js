const courts = [
  {
    "Id": 1,
    "Name": "174th Street Playground",
    "Location": "E 174 St. & Bronx River Ave.",
    "Coordinates": {
      "lat": 40.8342,
      "lng": -73.8775
    }
  },
  {
    "Id": 2,
    "Name": "52 Playground",
    "Location": "Kelly St. & Ave. St. John",
    "Coordinates": {
      "lat": 40.8149,
      "lng": -73.9021
    }
  },
  {
    "Id": 3,
    "Name": "Abigail Adams Playground",
    "Location": "Tinton Ave. & E 156 St.",
    "Coordinates": {
      "lat": 40.8172,
      "lng": -73.9044
    }
  },
  {
    "Id": 4,
    "Name": "Agnes Haywood Playground",
    "Location": "Barnes Ave. & E 215 St.",
    "Coordinates": {
      "lat": 40.8804,
      "lng": -73.8619
    }
  },
  {
    "Id": 5,
    "Name": "Allerton Playground",
    "Location": "Bouck & Throop Aves.",
    "Coordinates": {
      "lat": 40.8659,
      "lng": -73.8503
    }
  },
  {
    "Id": 6,
    "Name": "Angelo Campanero Playground",
    "Location": "Gun Hill Rd., Eastchester Rd. and O'Neill Pl.",
    "Coordinates": {
      "lat": 40.8679,
      "lng": -73.843
    }
  },
  {
    "Id": 7,
    "Name": "Aqueduct Lands Playground",
    "Location": "W 183 St., Aqueduct Ave., W Tremont Ave. and University Ave.",
    "Coordinates": {
      "lat": 40.8634,
      "lng": -73.9035
    }
  },
  {
    "Id": 8,
    "Name": "Arcilla Playground",
    "Location": "E 164 St. & Teller Ave.",
    "Coordinates": {
      "lat": 40.8271,
      "lng": -73.9145
    }
  },
  {
    "Id": 9,
    "Name": "Bailey Playground",
    "Location": "Bailey Ave. & W 234-W 238 Sts.",
    "Coordinates": {
      "lat": 40.8811,
      "lng": -73.9008
    }
  },
  {
    "Id": 10,
    "Name": "Behagen Playground",
    "Location": "E 166 St., Union Ave. and Tinton Ave.",
    "Coordinates": {
      "lat": 40.8254,
      "lng": -73.9015
    }
  },
  {
    "Id": 11,
    "Name": "Belmont Playground",
    "Location": "Crotona Ave. & E 181 St.",
    "Coordinates": {
      "lat": 40.8497,
      "lng": -73.8875
    }
  },
  {
    "Id": 12,
    "Name": "Brady Playground",
    "Location": "Bronxdale Ave. & Bronx Pk E",
    "Coordinates": {
      "lat": 40.8512,
      "lng": -73.8705
    }
  },
  {
    "Id": 13,
    "Name": "Bridge Playground",
    "Location": "Boscobel Pl., University Ave. and W 171 St.",
    "Coordinates": {
      "lat": 40.844,
      "lng": -73.924
    }
  },
  {
    "Id": 14,
    "Name": "Bruckner Playground",
    "Location": "Phillips Ave. & E 177 St.",
    "Coordinates": {
      "lat": 40.8268,
      "lng": -73.8289
    }
  },
  {
    "Id": 15,
    "Name": "Bufano Playground",
    "Location": "Bradford, Edison, La Salle and Waterbury Aves.",
    "Coordinates": {
      "lat": 40.838,
      "lng": -73.8312
    }
  },
  {
    "Id": 16,
    "Name": "Capt. Rivera Playground",
    "Location": "Forest Ave. & E 156 St.",
    "Coordinates": {
      "lat": 40.817,
      "lng": -73.907
    }
  },
  {
    "Id": 17,
    "Name": "Caserta Playground",
    "Location": "St. Raymond Ave. & Odell St.",
    "Coordinates": {
      "lat": 40.837,
      "lng": -73.854
    }
  },
  {
    "Id": 18,
    "Name": "Cedar Playground",
    "Location": "W 179 St. & Sedgwick Ave.",
    "Coordinates": {
      "lat": 40.8548,
      "lng": -73.9177
    }
  },
  {
    "Id": 19,
    "Name": "Claremont Park",
    "Location": "E 170 St. & Teller Ave.",
    "Coordinates": {
      "lat": 40.8378,
      "lng": -73.9082
    }
  },
  {
    "Id": 20,
    "Name": "Clark Playground",
    "Location": "E 144 St. & 3 Ave.",
    "Coordinates": {
      "lat": 40.8136,
      "lng": -73.9211
    }
  },
  {
    "Id": 21,
    "Name": "Crotona Playground #11",
    "Location": "Fulton Ave. between E 172 St. and Claremont",
    "Coordinates": {
      "lat": 40.8384,
      "lng": -73.8993
    }
  },
  {
    "Id": 22,
    "Name": "Crotona Playground #2",
    "Location": "Crotona N between Marmion and Prospect",
    "Coordinates": {
      "lat": 40.8402,
      "lng": -73.8913
    }
  },
  {
    "Id": 23,
    "Name": "Crotona Playground #5",
    "Location": "Crotona Pk E at E 173 St.",
    "Coordinates": {
      "lat": 40.8377,
      "lng": -73.8908
    }
  },
  {
    "Id": 24,
    "Name": "Crotona Playground #6",
    "Location": "Crotona E between Suburban and Charlotte",
    "Coordinates": {
      "lat": 40.8371,
      "lng": -73.8926
    }
  },
  {
    "Id": 25,
    "Name": "Crotona Playground #7",
    "Location": "Crotona E between Claremont and Charlotte",
    "Coordinates": {
      "lat": 40.8363,
      "lng": -73.8949
    }
  },
  {
    "Id": 26,
    "Name": "Crotona Playground #9",
    "Location": "Crotona S between Clinton and Prospect",
    "Coordinates": {
      "lat": 40.8391,
      "lng": -73.8931
    }
  },
  {
    "Id": 27,
    "Name": "Dawson Playground",
    "Location": "Intervale Ave. & Dawson St.",
    "Coordinates": {
      "lat": 40.8195,
      "lng": -73.8982
    }
  },
  {
    "Id": 28,
    "Name": "Devoe Park",
    "Location": "Sedgwick Ave. & Fordham Ave.",
    "Coordinates": {
      "lat": 40.8635,
      "lng": -73.9058
    }
  },
  {
    "Id": 29,
    "Name": "Drew Playground",
    "Location": "Fulton Ave. & E 169 St.",
    "Coordinates": {
      "lat": 40.8334,
      "lng": -73.9036
    }
  },
  {
    "Id": 30,
    "Name": "Dunar Playground",
    "Location": "E 161 St., Trinity Ave., E 163 St. and Cauldwell Ave.",
    "Coordinates": {
      "lat": 40.8233,
      "lng": -73.9064
    }
  },
  {
    "Id": 31,
    "Name": "Eastchester Playground",
    "Location": "Adee & Tenbroeck Aves.",
    "Coordinates": {
      "lat": 40.8698,
      "lng": -73.8531
    }
  },
  {
    "Id": 32,
    "Name": "Edenwald Playground",
    "Location": "Schieffelin Ave. & E 229 St.",
    "Coordinates": {
      "lat": 40.8841,
      "lng": -73.8457
    }
  },
  {
    "Id": 33,
    "Name": "Ferry Point Park",
    "Location": "Corner of Balcom Avenue and Dewey Avenue",
    "Coordinates": {
      "lat": 40.8157,
      "lng": -73.8298
    }
  },
  {
    "Id": 34,
    "Name": "Florence Colucci Playground",
    "Location": "Wilkinson & Mayflower Aves.",
    "Coordinates": {
      "lat": 40.852,
      "lng": -73.8343
    }
  },
  {
    "Id": 35,
    "Name": "Flynn Playground",
    "Location": "Brook Ave. & E 157 St.",
    "Coordinates": {
      "lat": 40.8212,
      "lng": -73.9121
    }
  },
  {
    "Id": 36,
    "Name": "Fordham Landing Playground",
    "Location": "Landing Rd., Just off Fordam Rd.",
    "Coordinates": {
      "lat": 40.8637,
      "lng": -73.9101
    }
  },
  {
    "Id": 37,
    "Name": "Fort #4 Playground",
    "Location": "Strong St. & Reservoir Ave.",
    "Coordinates": {
      "lat": 40.8745,
      "lng": -73.9007
    }
  },
  {
    "Id": 38,
    "Name": "Fort Independence Playground",
    "Location": "Sedgwick Ave. & Stevenson Pl.",
    "Coordinates": {
      "lat": 40.881,
      "lng": -73.895
    }
  },
  {
    "Id": 39,
    "Name": "Fox Playground",
    "Location": "SE Corner Fox St. & E 156 St.",
    "Coordinates": {
      "lat": 40.8147,
      "lng": -73.8987
    }
  },
  {
    "Id": 40,
    "Name": "Franz Sigel Park",
    "Location": "E 153 St. & Grand Concourse",
    "Coordinates": {
      "lat": 40.821,
      "lng": -73.9264
    }
  },
  {
    "Id": 41,
    "Name": "Goble Playground",
    "Location": "Macombs Pl. & Globel Rd",
    "Coordinates": {
      "lat": 40.8437,
      "lng": -73.9171
    }
  },
  {
    "Id": 42,
    "Name": "Gouverneur Morris Playground",
    "Location": "3 Ave., Saint Paul's Pl. and Washington Ave.",
    "Coordinates": {
      "lat": 40.8355,
      "lng": -73.9035
    }
  },
  {
    "Id": 43,
    "Name": "Grove Hill Playground",
    "Location": "Eagle Ave. & E 158 St.",
    "Coordinates": {
      "lat": 40.8197,
      "lng": -73.9091
    }
  },
  {
    "Id": 44,
    "Name": "Gun Hill Playground",
    "Location": "Holland Ave. & Magenta St.",
    "Coordinates": {
      "lat": 40.8747,
      "lng": -73.8656
    }
  },
  {
    "Id": 45,
    "Name": "Haffen Park",
    "Location": "Ely & Burke Ave.",
    "Coordinates": {
      "lat": 40.8735,
      "lng": -73.8398
    }
  },
  {
    "Id": 46,
    "Name": "Harding Park",
    "Location": "Bolton Ave. between O'Brien and Cornell Aves.",
    "Coordinates": {
      "lat": 40.8102,
      "lng": -73.8567
    }
  },
  {
    "Id": 47,
    "Name": "Havemeyer",
    "Location": "N S Cross Bronx Expwy., Havemeyer Ave. and Watson Ave.",
    "Coordinates": {
      "lat": 40.83,
      "lng": -73.8476
    }
  },
  {
    "Id": 48,
    "Name": "Haviland Playground",
    "Location": "Pugsley, Haviland, and Watson Aves.",
    "Coordinates": {
      "lat": 40.8289,
      "lng": -73.8589
    }
  },
  {
    "Id": 49,
    "Name": "Henry Hudson Park",
    "Location": "Independence & W 227 St.",
    "Coordinates": {
      "lat": 40.8813,
      "lng": -73.9202
    }
  },
  {
    "Id": 50,
    "Name": "I Am Park",
    "Location": "147 St. & Jackson Ave.",
    "Coordinates": {
      "lat": 40.811,
      "lng": -73.9101
    }
  },
  {
    "Id": 51,
    "Name": "James Lyons Square Playground",
    "Location": "Aldus St. & Bryant Ave.",
    "Coordinates": {
      "lat": 40.8229,
      "lng": -73.8882
    }
  },
  {
    "Id": 52,
    "Name": "Richman (Echo) Park",
    "Location": "E 178 St. & Upper Level",
    "Coordinates": {
      "lat": 40.8466,
      "lng": -73.7865
    }
  },
  {
    "Id": 53,
    "Name": "Kossuth Playground",
    "Location": "Moshulu Pkwy N & Kossuth Ave.",
    "Coordinates": {
      "lat": 40.8776,
      "lng": -73.8827
    }
  },
  {
    "Id": 54,
    "Name": "Loreto Playground",
    "Location": "Morris Park, Tomlinson, Van Nest and Haight Aves.",
    "Coordinates": {
      "lat": 40.849,
      "lng": -73.8518
    }
  },
  {
    "Id": 55,
    "Name": "Lozada Playground",
    "Location": "Willis Ave. & E 135 St.",
    "Coordinates": {
      "lat": 40.8078,
      "lng": -73.9247
    }
  },
  {
    "Id": 56,
    "Name": "Macombs",
    "Location": "E 158th St. & Ruppert Plaza",
    "Coordinates": {
      "lat": 40.8279,
      "lng": -73.9287
    }
  },
  {
    "Id": 57,
    "Name": "Magenta Playground",
    "Location": "Olinville Ave. & Rosewood St.",
    "Coordinates": {
      "lat": 40.8738,
      "lng": -73.8678
    }
  },
  {
    "Id": 58,
    "Name": "Marble Hill Playground",
    "Location": "Marble Hill Ave. between W 228 and W 230 Sts.",
    "Coordinates": {
      "lat": 40.8775,
      "lng": -73.9076
    }
  },
  {
    "Id": 59,
    "Name": "Matthews-Muliner Playground",
    "Location": "Matthews & Muliner Aves.",
    "Coordinates": {
      "lat": 40.8467,
      "lng": -73.8613
    }
  },
  {
    "Id": 60,
    "Name": "Mazzei Playground",
    "Location": "Mace Ave. & Williamsbridge Rd.",
    "Coordinates": {
      "lat": 40.8625,
      "lng": -73.8585
    }
  },
  {
    "Id": 61,
    "Name": "Merriam Playground (lower)",
    "Location": "W 168 St., Merriam Ave., Ogden Ave. and University Ave.",
    "Coordinates": {
      "lat": 40.8388,
      "lng": -73.9266
    }
  },
  {
    "Id": 62,
    "Name": "Merriam Playground (upper)",
    "Location": "W 168 St., Merriam Ave., Ogden Ave. and University Ave.",
    "Coordinates": {
      "lat": 40.8408,
      "lng": -73.9269
    }
  },
  {
    "Id": 63,
    "Name": "Millbrook Playground",
    "Location": "E 135 St. & Cypress Ave.",
    "Coordinates": {
      "lat": 40.8042,
      "lng": -73.9162
    }
  },
  {
    "Id": 64,
    "Name": "Morgan Playground",
    "Location": "E 168 St., Park Ave. and Washington Ave.",
    "Coordinates": {
      "lat": 40.8325,
      "lng": -73.9074
    }
  },
  {
    "Id": 65,
    "Name": "Morton Playground",
    "Location": "Morton Pl. & University Ave.",
    "Coordinates": {
      "lat": 40.8515,
      "lng": -73.9141
    }
  },
  {
    "Id": 66,
    "Name": "Mott Playground",
    "Location": "E 166 St. & Morris Ave.",
    "Coordinates": {
      "lat": 40.8314,
      "lng": -73.9146
    }
  },
  {
    "Id": 67,
    "Name": "Mount Hope Playground",
    "Location": "E. 177 St. & Walton Ave.",
    "Coordinates": {
      "lat": 40.8505,
      "lng": -73.9094
    }
  },
  {
    "Id": 68,
    "Name": "Mullaly Park",
    "Location": "E 164 St. & River Ave.",
    "Coordinates": {
      "lat": 40.831,
      "lng": -73.925
    }
  },
  {
    "Id": 69,
    "Name": "Nelson Playground",
    "Location": "W 166 St. & Nelson Ave.",
    "Coordinates": {
      "lat": 40.8347,
      "lng": -73.9269
    }
  },
  {
    "Id": 70,
    "Name": "Noble Playground",
    "Location": "Noble & Bronx River Aves.",
    "Coordinates": {
      "lat": 40.8369,
      "lng": -73.8726
    }
  },
  {
    "Id": 71,
    "Name": "Orchard Beach",
    "Location": "Bruckner Blvd., Eastchester Bay, Hutchinson River and LI Sound",
    "Coordinates": {
      "lat": 40.868,
      "lng": 73.7922
    }
  },
  {
    "Id": 72,
    "Name": "P.O. Hillario Serrano Playground",
    "Location": "Olmstead & Castle Hill Aves.",
    "Coordinates": {
      "lat": 40.8237,
      "lng": -73.8505
    }
  },
  {
    "Id": 73,
    "Name": "Parker Playground",
    "Location": "Castle Hill Ave. & Parker St.",
    "Coordinates": {
      "lat": 40.839,
      "lng": -73.853
    }
  },
  {
    "Id": 74,
    "Name": "Parkside Playground",
    "Location": "Arnow Ave. & Olinville Ave.",
    "Coordinates": {
      "lat": 40.868,
      "lng": -73.868
    }
  },
  {
    "Id": 75,
    "Name": "Patterson Playground",
    "Location": "Morris & College Aves.",
    "Coordinates": {
      "lat": 40.816,
      "lng": -73.9216
    }
  },
  {
    "Id": 76,
    "Name": "Pelham Bay Playground",
    "Location": "Middletown Road, off Bruckner Blvd.",
    "Coordinates": {
      "lat": 40.8483,
      "lng": -73.8252
    }
  },
  {
    "Id": 77,
    "Name": "Prospect Playground",
    "Location": "Clinton Ave. & E 176 St.",
    "Coordinates": {
      "lat": 40.8432,
      "lng": -73.8906
    }
  },
  {
    "Id": 78,
    "Name": "PS 21 Playground Rienzi Playground",
    "Location": "E 225 St. & White Plains Rd.",
    "Coordinates": {
      "lat": 40.8879,
      "lng": -73.8592
    }
  },
  {
    "Id": 79,
    "Name": "PS 48 Playground Hunts Point Playground",
    "Location": "Faile St. & Hunts Point Ave.",
    "Coordinates": {
      "lat": 40.822,
      "lng": -73.819
    }
  },
  {
    "Id": 80,
    "Name": "Randall Playground",
    "Location": "Randall & Castle Hill Aves.",
    "Coordinates": {
      "lat": 40.8193,
      "lng": -73.8494
    }
  },
  {
    "Id": 81,
    "Name": "Riverdale Playground",
    "Location": "W 237 St. & Independence Ave.",
    "Coordinates": {
      "lat": 40.8883,
      "lng": -73.9152
    }
  },
  {
    "Id": 82,
    "Name": "Saw Mill Playground",
    "Location": "Brook Avenue and East 140 Street",
    
    "Coordinates": {
      "lat": 40.8088,
      "lng": -73.9193
    }
  },
  {
    "Id": 83,
    "Name": "Sedgwick Playground",
    "Location": "Undercliff Ave. & Cross Bronx Expwy.",
    "Coordinates": {
      "lat": 40.845,
      "lng": -73.923
    }
  },
  {
    "Id": 84,
    "Name": "Seton Park",
    "Location": "W 235 St. & Douglas Ave.",
    "Coordinates": {
      "lat": 40.8864,
      "lng": -73.9171
    }
  },
  {
    "Id": 85,
    "Name": "Slattery Playground",
    "Location": "Ryer & Valentine Aves.",
    "Coordinates": {
      "lat": 40.8574,
      "lng": -73.8988
    }
  },
  {
    "Id": 86,
    "Name": "Sound View Park",
    "Location": "Bronx River & Lafayette Aves.",
    "Coordinates": {
      "lat": 40.8143,
      "lng": -73.8655
    }
  },
  {
    "Id": 87,
    "Name": "Space-Time Playground",
    "Location": "Lafayette & Bolton Aves.",
    "Coordinates": {
      "lat": 40.8225,
      "lng": -73.8598
    }
  },
  {
    "Id": 88,
    "Name": "Spuyten Duyvil Playground",
    "Location": "W 236 St. & Douglas Ave.",
    "Coordinates": {
      "lat": 40.8871,
      "lng": -73.9156
    }
  },
  {
    "Id": 89,
    "Name": "St. James Park",
    "Location": "E 193 St. & Jerome Ave.",
    "Coordinates": {
      "lat": 40.8658,
      "lng": -73.8972
    }
  },
  {
    "Id": 90,
    "Name": "St. Mary's Playground East",
    "Location": "Jackson Ave. & St. Mary's St.",
    "Coordinates": {
      "lat": 40.8125,
      "lng": -73.9138
    }
  },
  {
    "Id": 91,
    "Name": "St. Mary's Playground West",
    "Location": "Saint Ann's Ave. & E 147 St.",
    "Coordinates": {
      "lat": 40.8102,
      "lng": -73.9105
    }
  },
  {
    "Id": 92,
    "Name": "Stars & Stripes Playground",
    "Location": "Crawford & Baychester Aves.",
    "Coordinates": {
      "lat": 40.8857,
      "lng": -73.8396
    }
  },
  {
    "Id": 93,
    "Name": "Stebbins Playground",
    "Location": "E 165 St. & Stebbins Ave.",
    "Coordinates": {
      "lat": 40.8226,
      "lng": -73.8983
    }
  },
  {
    "Id": 94,
    "Name": "Story Playground",
    "Location": "Theriot & Story Aves.",
    "Coordinates": {
      "lat": 40.8229,
      "lng": -73.8631
    }
  },
  {
    "Id": 95,
    "Name": "The Pearly Gates Playground",
    "Location": "Tratman & Saint Peter's Aves.",
    "Coordinates": {
      "lat": 40.8659,
      "lng": -73.8503
    }
  },
  {
    "Id": 96,
    "Name": "Tiffany Playground",
    "Location": "Fox, Tiffany & E 167 Sts.",
    "Coordinates": {
      "lat": 40.8249,
      "lng": -73.8944
    }
  },
  {
    "Id": 97,
    "Name": "Van Cortlandt Stadium",
    "Location": "Van Cortlandt Park South & Gouverneur Ave.",
    "Coordinates": {
      "lat": 40.885,
      "lng": -73.891
    }
  },
  {
    "Id": 98,
    "Name": "Wakefield Playground",
    "Location": "Carpenter Ave. & E 239 St.",
    "Coordinates": {
      "lat": 40.9018,
      "lng": -73.8543
    }
  },
  {
    "Id": 99,
    "Name": "Waring Playground",
    "Location": "Waring Ave. & Bronx Pk E.",
    "Coordinates": {
      "lat": 40.8602,
      "lng": -73.8715
    }
  },
  {
    "Id": 100,
    "Name": "Watson Gleason Playground",
    "Location": "Watson & Rosedale Aves.",
    "Coordinates": {
      "lat": 40.8281,
      "lng": -73.8689
    }
  },
  {
    "Id": 101,
    "Name": "Webster Playground",
    "Location": "E 188 St. & Webster Ave.",
    "Coordinates": {
      "lat": 40.8594,
      "lng": -73.8927
    }
  },
  {
    "Id": 102,
    "Name": "Williamsbridge Oval",
    "Location": "Van Cortlandt Ave. E, Bainbridge Ave. and Reservoir Oval",
    "Coordinates": {
      "lat": 40.8768,
      "lng": -73.8776
    }
  },
  {
    "Id": 103,
    "Name": "Willis Playground",
    "Location": "Willis Ave. & E 141 St.",
    "Coordinates": {
      "lat": 40.8107,
      "lng": -73.9236
    }
  },
  {
    "Id": 104,
    "Name": "Albemarle Playground",
    "Location": "Albermarle Rd., Dahill Rd. and McDonald Ave.",
    "Coordinates": {
      "lat": 40.646,
      "lng": -73.9808
    }
  },
  {
    "Id": 105,
    "Name": "Albert J. Parham Playground",
    "Location": "Franklin Ave. between Willoughby and DeKalb Aves.",
    "Coordinates": {
      "lat": 40.6905,
      "lng": -73.9709
    }
  },
  {
    "Id": 106,
    "Name": "Albert Lysander Parham Playground",
    "Location": "Adelphi St., Clermont, DeKalb and Willoughby Aves.",
    "Coordinates": {
      "lat": 40.6905,
      "lng": -73.9709
    }
  },
  {
    "Id": 107,
    "Name": "Alex Hamilton-Metz Memorial Field",
    "Location": "Albany, East New York and Lefferts Aves.",
    "Coordinates": {
      "lat": 40.6626,
      "lng": -73.9405
    }
  },
  {
    "Id": 108,
    "Name": "Alex Lindower Park",
    "Location": "Mill & Strickland Aves.",
    "Coordinates": {
      "lat": 40.613,
      "lng": -73.912
    }
  },
  {
    "Id": 109,
    "Name": "American Playground",
    "Location": "Noble, Franklin & Milton Sts.",
    "Coordinates": {
      "lat": 40.729,
      "lng": -73.9578
    }
  },
  {
    "Id": 110,
    "Name": "Andries Playground",
    "Location": "Ave. K & Nostrand Ave.",
    "Coordinates": {
      "lat": 40.623,
      "lng": -73.9464
    }
  },
  {
    "Id": 111,
    "Name": "Banneker Playground",
    "Location": "Marcy Ave., Kosciusko St. and Lafayette Ave.",
    "Coordinates": {
      "lat": 40.6903,
      "lng": -73.9494
    }
  },
  {
    "Id": 112,
    "Name": "Bartlett Playground",
    "Location": "Bartlett St. & Throop Ave.",
    "Coordinates": {
      "lat": 40.701,
      "lng": -73.946
    }
  },
  {
    "Id": 113,
    "Name": "Bath Beach Playground",
    "Location": "Shore Pkwy. & 17 Ave.",
    "Coordinates": {
      "lat": 40.6024,
      "lng": -74.0107
    }
  },
  {
    "Id": 114,
    "Name": "Bath Playground",
    "Location": "Bath Ave. between 24 Ave. and Bay 37 St.",
    "Coordinates": {
      "lat": 40.5946,
      "lng": -73.9936
    }
  },
  {
    "Id": 115,
    "Name": "Bay View Houses & PS 272",
    "Location": "S JS Seaview Ave. Opposite E 99 St.",
    "Coordinates": {
      "lat": 40.6348,
      "lng": -73.8871
    }
  },
  {
    "Id": 116,
    "Name": "Bealin Square & Seth Low Playground",
    "Location": "Ave. P., Bay Pkwy. and W 12 St.",
    "Coordinates": {
      "lat": 40.6079,
      "lng": -73.9859
    }
  },
  {
    "Id": 117,
    "Name": "Bedford Playground",
    "Location": "Bedford Ave., S 9 St. and Division Ave.",
    "Coordinates": {
      "lat": 40.7084,
      "lng": -73.9637
    }
  },
  {
    "Id": 118,
    "Name": "Belmont Playground",
    "Location": "Pitkin Ave., Drew St., Belmont Ave., and N Conduit Ave.",
    "Coordinates": {
      "lat": 40.6757,
      "lng": -73.8629
    }
  },
  {
    "Id": 119,
    "Name": "Benson Playground",
    "Location": "Bath Ave. between Bay 22 and Bay 23 Sts.",
    "Coordinates": {
      "lat": 40.6027,
      "lng": -74.0025
    }
  },
  {
    "Id": 120,
    "Name": "Bensonhurst Park",
    "Location": "Gravesend Bay, 21 Ave., Cropsey Ave. and Bay Pkwy.",
    "Coordinates": {
      "lat": 40.5977,
      "lng": -74.0011
    }
  },
  {
    "Id": 121,
    "Name": "Bergen Beach Park",
    "Location": "Ave. T, Ave. N, E 71 St. and E 72 St.",
    "Coordinates": {
      "lat": 40.6226,
      "lng": -73.9095
    }
  },
  {
    "Id": 122,
    "Name": "Berry Playground",
    "Location": "S 3 St., Berry St. and Bedford Ave.",
    "Coordinates": {
      "lat": 40.7126,
      "lng": -73.9637
    }
  },
  {
    "Id": 123,
    "Name": "Betsy Head Memorial Playground",
    "Location": "Livonia Ave., Dumont Ave., Hopkinson Ave., Blake Ave. and Strauss St.",
    "Coordinates": {
      "lat": 40.6643,
      "lng": -73.9119
    }
  },
  {
    "Id": 124,
    "Name": "Bildersee Playground",
    "Location": "Flatlands Ave. between E 81 and E 82 St.",
    "Coordinates": {
      "lat": 40.6354,
      "lng": -73.9117
    }
  },
  {
    "Id": 125,
    "Name": "Brighton Playground",
    "Location": "W S Brighton 2 Sts. At Boardwalk",
    "Coordinates": {
      "lat": 40.5751,
      "lng": -73.9657
    }
  },
  {
    "Id": 126,
    "Name": "Brizzi Playground",
    "Location": "42 St. & 10 to New Utrecht Aves.",
    "Coordinates": {
      "lat": 40.6424,
      "lng": -73.9947
    }
  },
  {
    "Id": 127,
    "Name": "Brower Park & PS 189",
    "Location": "Brooklyn Ave., St. Mark's Ave., Kingston Ave. and Strauss St.",
    "Coordinates": {
      "lat": 40.6735,
      "lng": -73.9442
    }
  },
  {
    "Id": 128,
    "Name": "Brownsville Rec. Center & Playground",
    "Location": "Linden Blvd. and Christopher Ave.",
    "Coordinates": {
      "lat": 40.6568,
      "lng": -73.9014
    }
  },
  {
    "Id": 129,
    "Name": "Bushwick Playground",
    "Location": "Knickerbocker Ave., Putnam Ave. and Woodbine St.",
    "Coordinates": {
      "lat": 40.7018,
      "lng": -73.9394
    }
  },
  {
    "Id": 130,
    "Name": "Canarsie Park",
    "Location": "Paedergat Basin and Seaview Ave.",
    "Coordinates": {
      "lat": 40.6308,
      "lng": -73.8933
    }
  },
  {
    "Id": 131,
    "Name": "Capt. V. Hickman Park IS 78",
    "Location": "Veterans Ave. between E 66 and E 68 Sts.",
    "Coordinates": {
      "lat": 40.6204,
      "lng": -73.9135
    }
  },
  {
    "Id": 132,
    "Name": "Carver Playground",
    "Location": "Ralph Ave., Sumpter St., Howard Ave. and Marion St.",
    "Coordinates": {
      "lat": 40.6805,
      "lng": -73.9207
    }
  },
  {
    "Id": 133,
    "Name": "Century Playground",
    "Location": "W Brighton Ave. between W 2 and W 3 Sts.",
    "Coordinates": {
      "lat": 40.577,
      "lng": -73.97
    }
  },
  {
    "Id": 134,
    "Name": "Chester Playground",
    "Location": "Chester St., Sutter Ave., Bristol St. and Pitkin Ave.",
    "Coordinates": {
      "lat": 40.6688,
      "lng": -73.9119
    }
  },
  {
    "Id": 135,
    "Name": "City Line Park",
    "Location": "Atlantic & Fountain Aves.",
    "Coordinates": {
      "lat": 40.6789,
      "lng": -73.8746
    }
  },
  {
    "Id": 136,
    "Name": "Col. David Marcus Memorial Playground",
    "Location": "Ave. P & E 5 Sts.",
    "Coordinates": {
      "lat": 40.6097,
      "lng": -73.9696
    }
  },
  {
    "Id": 137,
    "Name": "Commodore Barry Park & Playground",
    "Location": "Park Ave., Navy St., Flushing Ave. and N. Eliot Pl.",
    "Coordinates": {
      "lat": 40.6978,
      "lng": -73.9791
    }
  },
  {
    "Id": 138,
    "Name": "Cooper Park",
    "Location": "Sharon St, Olive St., Maspeth Ave. and Morgan Ave.",
    "Coordinates": {
      "lat": 40.7156,
      "lng": -73.9362
    }
  },
  {
    "Id": 139,
    "Name": "Cypress Hills Houses Playground",
    "Location": "Blake & Euclid Aves.",
    "Coordinates": {
      "lat": 40.6702,
      "lng": -73.8711
    }
  },
  {
    "Id": 140,
    "Name": "Dean Playground",
    "Location": "Dean to Bergen Sts., between 6 and Carlton Aves.",
    "Coordinates": {
      "lat": 40.681,
      "lng": -73.9734
    }
  },
  {
    "Id": 141,
    "Name": "Decatur Playground",
    "Location": "Decatur and MacDonough Sts., between Sumner and Lewis Aves.",
    "Coordinates": {
      "lat": 40.6815,
      "lng": -73.9369
    }
  },
  {
    "Id": 142,
    "Name": "DeKalb Playground PS 270 Playground",
    "Location": "Lafayette & Classon Aves.",
    "Coordinates": {
      "lat": 40.6892,
      "lng": -73.9609
    }
  },
  {
    "Id": 143,
    "Name": "Ditmas Playground Railroad Playground",
    "Location": "Ditmas Ave. between E 91 & E 92 Sts.",
    "Coordinates": {
      "lat": 40.6495,
      "lng": -73.9143
    }
  },
  {
    "Id": 144,
    "Name": "Dr. Martin Luther King, Jr. Park",
    "Location": "Dumont Ave., Blake Ave., Miller Ave. and Bradford St.",
    "Coordinates": {
      "lat": 40.6681,
      "lng": -73.8905
    }
  },
  {
    "Id": 145,
    "Name": "Dr. Richard Greene Playground",
    "Location": "Stone & Sutter Aves.",
    "Coordinates": {
      "lat": 40.6674,
      "lng": -73.9066
    }
  },
  {
    "Id": 146,
    "Name": "Dreier-Offerman Park",
    "Location": "Gravesend Bay, Bay 44-Bay 49 Sts. and Shore Pkwy.",
    "Coordinates": {
      "lat": 40.5876,
      "lng": -73.9905
    }
  },
  {
    "Id": 147,
    "Name": "Dyker Beach Park",
    "Location": "Shore Pkwy., 86 St. and 7 to 14 Aves.",
    "Coordinates": {
      "lat": 40.6126,
      "lng": -74.0126
    }
  },
  {
    "Id": 148,
    "Name": "Patrick O&rsquo;Rourke Park",
    "Location": "80 to 81 Sts. and 11 to 12 Aves.",
    "Coordinates": {
      "lat": 40.6191,
      "lng": -74.0135
    }
  },
  {
    "Id": 149,
    "Name": "Edmonds Playground",
    "Location": "DeKalb Ave., Adelphi St., and Carlton Ave.",
    "Coordinates": {
      "lat": 40.6892,
      "lng": -73.9712
    }
  },
  {
    "Id": 150,
    "Name": "Edward C. Blum Playground PS 46",
    "Location": "Adelphi & Myrtle Aves.",
    "Coordinates": {
      "lat": 40.6938,
      "lng": -73.9712
    }
  },
  {
    "Id": 151,
    "Name": "Eleanor Roosevelt Playground",
    "Location": "Lewis Ave., DeKalb Ave., Stuyvesant Ave. and Kosciusko St.",
    "Coordinates": {
      "lat": 40.6927,
      "lng": -73.9357
    }
  },
  {
    "Id": 152,
    "Name": "El-Shabazz Playground",
    "Location": "Reid Ave., Malcolm X Blvd. and MacDonough St.",
    "Coordinates": {
      "lat": 40.6828,
      "lng": -73.9304
    }
  },
  {
    "Id": 153,
    "Name": "Ethan Allen Park",
    "Location": "Cozine Ave. Vermont St. and New Jersey Ave.",
    "Coordinates": {
      "lat": 40.6555,
      "lng": -73.8871
    }
  },
  {
    "Id": 154,
    "Name": "Eugenio Maria De Hostos Playground",
    "Location": "Harrison Ave., Walton to Lorimer Sts. and Throop Ave.",
    "Coordinates": {
      "lat": 40.7028,
      "lng": -73.9497
    }
  },
  {
    "Id": 155,
    "Name": "Evergreen Playground",
    "Location": "Evergreen Ave., Decatur St. and Schaefer St.",
    "Coordinates": {
      "lat": 40.6863,
      "lng": -73.9107
    }
  },
  {
    "Id": 156,
    "Name": "Fermi Playground",
    "Location": "Troutman St., Central Ave., Starr St. and Wilson Ave.",
    "Coordinates": {
      "lat": 40.7007,
      "lng": -73.9284
    }
  },
  {
    "Id": 157,
    "Name": "Fish Playground",
    "Location": "Saratoga Ave. between Herkimer and Fulton Sts.",
    "Coordinates": {
      "lat": 40.6781,
      "lng": -73.9147
    }
  },
  {
    "Id": 158,
    "Name": "Fort Greene Park",
    "Location": "Myrtle Ave., Cumberland St. and DeKalb Ave.",
    "Coordinates": {
      "lat": 40.6927,
      "lng": -73.9773
    }
  },
  {
    "Id": 159,
    "Name": "Fox Memorial Park PS 251 Playground",
    "Location": "Ave. H, Ave. I and E 54 to E 55 Sts.",
    "Coordinates": {
      "lat": 40.6324,
      "lng": -73.9236
    }
  },
  {
    "Id": 160,
    "Name": "Frances Hamburger Sternberg Park",
    "Location": "Montrose Ave., Boerum St., Lorimer St. and Leonard St.",
    "Coordinates": {
      "lat": 40.7057,
      "lng": -73.9475
    }
  },
  {
    "Id": 161,
    "Name": "Garden Playground",
    "Location": "Flushing Ave., Beaver St. and Garden St.",
    "Coordinates": {
      "lat": 40.7012,
      "lng": -73.9381
    }
  },
  {
    "Id": 162,
    "Name": "George Wingate HS Playground",
    "Location": "SE Corner Brooklyn Ave. & Rutland Rd.",
    "Coordinates": {
      "lat": 40.6591,
      "lng": -73.9442
    }
  },
  {
    "Id": 163,
    "Name": "Glenwood Houses Playground",
    "Location": "Ralph Ave. & Farragut Rd.",
    "Coordinates": {
      "lat": 40.6365,
      "lng": -73.9199
    }
  },
  {
    "Id": 164,
    "Name": "Golconda Playground",
    "Location": "E S Gold St. and Nassau to Concord Sts.",
    "Coordinates": {
      "lat": 40.6977,
      "lng": -73.9828
    }
  },
  {
    "Id": 165,
    "Name": "Gowanus Houses Playground",
    "Location": "Hoyt, Wyckoff and Bond Sts.",
    "Coordinates": {
      "lat": 40.6844,
      "lng": -73.9876
    }
  },
  {
    "Id": 166,
    "Name": "Grace Playground",
    "Location": "Belmont Ave., Pitkin Ave., Vermont St. and New Jersey St.",
    "Coordinates": {
      "lat": 40.671,
      "lng": -73.8951
    }
  },
  {
    "Id": 167,
    "Name": "Gravesend Park",
    "Location": "18 Ave. Near 57 St.",
    "Coordinates": {
      "lat": 40.6235,
      "lng": -73.9848
    }
  },
  {
    "Id": 168,
    "Name": "Greene Playground PS 11 Playground",
    "Location": "Greene Ave. between Waverly and Washington Aves.",
    "Coordinates": {
      "lat": 40.6865,
      "lng": -73.9661
    }
  },
  {
    "Id": 169,
    "Name": "Harry Maze Memorial Park",
    "Location": "Ave. D bet. E 56 & E 57 Sts.",
    "Coordinates": {
      "lat": 40.6433,
      "lng": -73.9231
    }
  },
  {
    "Id": 170,
    "Name": "Hattie Carthan Playground",
    "Location": "Monroe St., Tompkins Ave., Madison St. and Marcy Ave.",
    "Coordinates": {
      "lat": 40.6858,
      "lng": -73.9461
    }
  },
  {
    "Id": 171,
    "Name": "Herman Dolgon Playground",
    "Location": "Ave. V, Nostrand St. and Batchelder St.",
    "Coordinates": {
      "lat": 40.5982,
      "lng": -73.9406
    }
  },
  {
    "Id": 172,
    "Name": "Homecrest Playground",
    "Location": "Shore Pkwy. To Williams Ct. and E 12 St.",
    "Coordinates": {
      "lat": 40.586,
      "lng": -73.957
    }
  },
  {
    "Id": 173,
    "Name": "Houston Playground",
    "Location": "Powell St., Liberty Ave., Sackman St. and Glenmore Ave.",
    "Coordinates": {
      "lat": 40.6721,
      "lng": -73.9053
    }
  },
  {
    "Id": 174,
    "Name": "Howard Houses Playground & Pool",
    "Location": "Glenmore & Mother Gaston Blvd.",
    "Coordinates": {
      "lat": 40.6718,
      "lng": -73.9084
    }
  },
  {
    "Id": 175,
    "Name": "IS 302 (Sperandeo Brothers)",
    "Location": "Atlantic Ave. between Elton and Linwood Sts.",
    "Coordinates": {
      "lat": 40.6763,
      "lng": -73.8844
    }
  },
  {
    "Id": 176,
    "Name": "Israel Putnam Playground",
    "Location": "Sumner Ave. and Madison to Monroe Sts.",
    "Coordinates": {
      "lat": 40.6865,
      "lng": -73.9399
    }
  },
  {
    "Id": 177,
    "Name": "J Playground",
    "Location": "Ave. J, Ave. K, 103 St. and 104 Sts.",
    "Coordinates": {
      "lat": 40.644,
      "lng": -73.893
    }
  },
  {
    "Id": 178,
    "Name": "J.J. Byrne Memorial Park JHS 51",
    "Location": "3 to 4 Sts. and 4 to 5 Aves.",
    "Coordinates": {
      "lat": 40.6728,
      "lng": -73.9842
    }
  },
  {
    "Id": 179,
    "Name": "Jackie Robinson Park",
    "Location": "Chauncey St. E O Reid Ave.",
    "Coordinates": {
      "lat": 40.68,
      "lng": -73.9277
    }
  },
  {
    "Id": 180,
    "Name": "Jackie Robinson Playground",
    "Location": "Sullivan Pl., Franklin Ave. and Montgomery St.",
    "Coordinates": {
      "lat": 40.6657,
      "lng": -73.9592
    }
  },
  {
    "Id": 181,
    "Name": "Jacob Joffe Park",
    "Location": "Ave. K between E 58 and E 59 Sts.",
    "Coordinates": {
      "lat": 40.625,
      "lng": -73.9194
    }
  },
  {
    "Id": 182,
    "Name": "James Marshall Power Playground",
    "Location": "Ave. N & Utica Ave.",
    "Coordinates": {
      "lat": 40.6183,
      "lng": -73.9276
    }
  },
  {
    "Id": 183,
    "Name": "Jerome Playground",
    "Location": "Wortman Ave. & Warwick St.",
    "Coordinates": {
      "lat": 40.6591,
      "lng": -73.8796
    }
  },
  {
    "Id": 184,
    "Name": "Jesse Owens Playground",
    "Location": "Stuyvesant & Lafayette Aves.",
    "Coordinates": {
      "lat": 40.6912,
      "lng": -73.9326
    }
  },
  {
    "Id": 185,
    "Name": "Jessie & Charles Dome Playground",
    "Location": "NE Corner 38 St. & Dahill Rd.",
    "Coordinates": {
      "lat": 40.638,
      "lng": -73.98
    }
  },
  {
    "Id": 186,
    "Name": "JHS 126 Playground",
    "Location": "Manhattan Ave. & Leonard St. (Ericsson Playground)",
    "Coordinates": {
      "lat": 40.7205,
      "lng": -73.9484
    }
  },
  {
    "Id": 187,
    "Name": "JHS 136 Playground (Playground Three-Forty)",
    "Location": "40 St., 41 St. and 3 Ave.",
    "Coordinates": {
      "lat": 40.6523,
      "lng": -74.0084
    }
  },
  {
    "Id": 188,
    "Name": "John Allen Payne Park",
    "Location": "64 to 65 Sts. and 3 Ave.",
    "Coordinates": {
      "lat": 40.6399,
      "lng": -74.0242
    }
  },
  {
    "Id": 189,
    "Name": "John Hancock Playground",
    "Location": "Bedford Ave., Hancock St. and Jefferson Ave.",
    "Coordinates": {
      "lat": 40.6822,
      "lng": -73.9543
    }
  },
  {
    "Id": 190,
    "Name": "John J. Carty Park",
    "Location": "Ft. Hamilton, Gowanus Pkwy., and 94 to 101 Sts.",
    "Coordinates": {
      "lat": 40.6133,
      "lng": -74.0302
    }
  },
  {
    "Id": 191,
    "Name": "Kelly Playground",
    "Location": "N S Ave. S between BMT and PS 255",
    "Coordinates": {
      "lat": 40.6042,
      "lng": -73.9564
    }
  },
  {
    "Id": 192,
    "Name": "Kennedy King Playground",
    "Location": "Lenox Rd., Clarkson Ave., E 93 St. and E 94 St.",
    "Coordinates": {
      "lat": 40.6586,
      "lng": -73.9221
    }
  },
  {
    "Id": 193,
    "Name": "Lafayette Gardens Playground",
    "Location": "Lafayette & Franklin Aves.",
    "Coordinates": {
      "lat": 40.6896,
      "lng": -73.9574
    }
  },
  {
    "Id": 194,
    "Name": "Lafayette Playground",
    "Location": "Lafayette & E O Reid Aves.",
    "Coordinates": {
      "lat": 40.5946,
      "lng": -73.9854
    }
  },
  {
    "Id": 195,
    "Name": "LaGuardia Playground",
    "Location": "Havemeyer to Roebling Sts. and S 4 to S 5 Sts.",
    "Coordinates": {
      "lat": 40.71,
      "lng": -73.9593
    }
  },
  {
    "Id": 196,
    "Name": "Leif Ericson Park & Square",
    "Location": "66-67 Sts. and 8 to 9 Aves.",
    "Coordinates": {
      "lat": 40.636,
      "lng": -74.0205
    }
  },
  {
    "Id": 197,
    "Name": "Leon S. Kaiser Playground",
    "Location": "Coney Island Creek and W 24 St.",
    "Coordinates": {
      "lat": 40.5784,
      "lng": -73.9962
    }
  },
  {
    "Id": 198,
    "Name": "Lincoln Terrace",
    "Location": "Rochester Ave. and President St.",
    "Coordinates": {
      "lat": 40.6657,
      "lng": -73.9268
    }
  },
  {
    "Id": 199,
    "Name": "Linden Playground JHS 166",
    "Location": "Linden Blvd., Stanley Ave. and Vermont to Wyona Sts.",
    "Coordinates": {
      "lat": 40.659,
      "lng": -73.8869
    }
  },
  {
    "Id": 200,
    "Name": "Linwood Playground",
    "Location": "Linwood St., New Lots Ave. and Hegeman Aves.",
    "Coordinates": {
      "lat": 40.6659,
      "lng": -73.8802
    }
  },
  {
    "Id": 201,
    "Name": "Lion's Pride Playground",
    "Location": "Riverdale, Van Sinderen, Livonia and Snediker Aves.",
    "Coordinates": {
      "lat": 40.6626,
      "lng": -73.8997
    }
  },
  {
    "Id": 202,
    "Name": "Louis H. Pink Houses Playground",
    "Location": "Stanley Ave. & Eldert Lane",
    "Coordinates": {
      "lat": 40.666,
      "lng": -73.863
    }
  },
  {
    "Id": 203,
    "Name": "Lt. Petrosino Playground",
    "Location": "New Utrecht to 16 Aves. and 70 to 71 Sts.",
    "Coordinates": {
      "lat": 40.6189,
      "lng": -73.9985
    }
  },
  {
    "Id": 204,
    "Name": "Luna Park Houses Playground",
    "Location": "Surf Ave. and W 8 St. to W 12 St.",
    "Coordinates": {
      "lat": 40.575,
      "lng": -73.978
    }
  },
  {
    "Id": 205,
    "Name": "Manhattan Beach Park",
    "Location": "Oriental Blvd. & Ocean Ave.",
    "Coordinates": {
      "lat": 40.5767,
      "lng": -73.9461
    }
  },
  {
    "Id": 206,
    "Name": "Marc's & Jason's Playground",
    "Location": "Sterling St., Empire Blvd. and New York Ave.",
    "Coordinates": {
      "lat": 40.6634,
      "lng": -73.9492
    }
  },
  {
    "Id": 207,
    "Name": "Maria Hernandez Park",
    "Location": "Knickerbocker to Irving Aves. and Starr to Suydam Sts.",
    "Coordinates": {
      "lat": 40.703,
      "lng": -73.924
    }
  },
  {
    "Id": 208,
    "Name": "Marine Park Jerry Debonis",
    "Location": "Gerritsen Ave. & Ave. X",
    "Coordinates": {
      "lat": 40.5969,
      "lng": -73.9279
    }
  },
  {
    "Id": 209,
    "Name": "Marine Park PS 278",
    "Location": "Fillmore Ave. & Madison Pl.",
    "Coordinates": {
      "lat": 40.608,
      "lng": -73.9378
    }
  },
  {
    "Id": 210,
    "Name": "Marion-Hopkinson Playground",
    "Location": "Hopkinson Ave. & Marion St.",
    "Coordinates": {
      "lat": 40.6817,
      "lng": -73.9136
    }
  },
  {
    "Id": 211,
    "Name": "Marlboro Houses Playground",
    "Location": "W 11 St. & Ave. W",
    "Coordinates": {
      "lat": 40.5911,
      "lng": -73.9808
    }
  },
  {
    "Id": 212,
    "Name": "Martin Luther Playground",
    "Location": "55 to 56 Sts., 2 Ave.",
    "Coordinates": {
      "lat": 40.6461,
      "lng": -74.0197
    }
  },
  {
    "Id": 213,
    "Name": "McCarren Park",
    "Location": "Bedford Avenue and North 12th Street",
    "Coordinates": {
      "lat": 40.7213,
      "lng": -73.9495
    }
  },
  {
    "Id": 214,
    "Name": "McCarren Park",
    "Location": "Abate Playground",
    "Coordinates": {
      "lat": 40.7212,
      "lng": -73.9554
    }
  },
  {
    "Id": 215,
    "Name": "McLaughlin Park",
    "Location": "Tillary, Jay Sts., Cathedral Pl. and Bridge St.",
    "Coordinates": {
      "lat": 40.6963,
      "lng": -73.9866
    }
  },
  {
    "Id": 216,
    "Name": "Mellett Playground",
    "Location": "Ave. V, E 13 St. and E 14 St.",
    "Coordinates": {
      "lat": 40.597,
      "lng": -73.9571
    }
  },
  {
    "Id": 217,
    "Name": "Middleton",
    "Location": "Lynch St., Middleton St. and Lee Ave.",
    "Coordinates": {
      "lat": 40.7008,
      "lng": -73.9552
    }
  },
  {
    "Id": 218,
    "Name": "Nautilus Playground",
    "Location": "Public Beach, West 29 and West 32 street",
    "Coordinates": {
      "lat": 40.5717,
      "lng": -73.9968
    }
  },
  {
    "Id": 219,
    "Name": "Neptune Playground",
    "Location": "Neptune Ave. & W 12 St.",
    "Coordinates": {
      "lat": 40.5781,
      "lng": -73.9808
    }
  },
  {
    "Id": 220,
    "Name": "Newport Playground",
    "Location": "Newport Ave., Thatford Ave. and Osborne St.",
    "Coordinates": {
      "lat": 40.661,
      "lng": -73.9072
    }
  },
  {
    "Id": 221,
    "Name": "Nostrand Playground",
    "Location": "Nostrand & Foster Aves.",
    "Coordinates": {
      "lat": 40.6383,
      "lng": -73.9469
    }
  },
  {
    "Id": 222,
    "Name": "Ocean Hill Playground",
    "Location": "Bergen St., Rockaway Ave. and Dean St.",
    "Coordinates": {
      "lat": 40.6743,
      "lng": -73.9119
    }
  },
  {
    "Id": 223,
    "Name": "Osborn Playground",
    "Location": "Linden Blvd., Osborne St. and Thatford Ave.",
    "Coordinates": {
      "lat": 40.6559,
      "lng": -73.9059
    }
  },
  {
    "Id": 224,
    "Name": "Oxport Playground",
    "Location": "Flushing Ave., N Portland Ave. and N Oxford St.",
    "Coordinates": {
      "lat": 40.6977,
      "lng": -73.9762
    }
  },
  {
    "Id": 225,
    "Name": "Pacific Playground",
    "Location": "W S Howard Ave. and Pacific to Dean Sts.",
    "Coordinates": {
      "lat": 40.675,
      "lng": -73.921
    }
  },
  {
    "Id": 226,
    "Name": "Paerdegat Park",
    "Location": "Foster Ave., Farragut Rd., E 40 St. and Albany Ave.",
    "Coordinates": {
      "lat": 40.638,
      "lng": -73.938
    }
  },
  {
    "Id": 227,
    "Name": "Parade Ground",
    "Location": "Caton Ave., Coney Island Ave., Parkside Ave. and Parade Pl.",
    "Coordinates": {
      "lat": 40.6515,
      "lng": -73.9656
    }
  },
  {
    "Id": 228,
    "Name": "Parkside Playground",
    "Location": "Rogers Ave., Winthrop St. and Parkside Ave.",
    "Coordinates": {
      "lat": 40.6566,
      "lng": -73.9543
    }
  },
  {
    "Id": 229,
    "Name": "Paul W. Kolbert Playground",
    "Location": "Ave. L and E 17 to E 18 Sts.",
    "Coordinates": {
      "lat": 40.6198,
      "lng": -73.9581
    }
  },
  {
    "Id": 230,
    "Name": "Police Officer Reinaldo Salgado Playground",
    "Location": "Monroe to Madison Sts., Patchen Ave. and Ralph Ave.",
    "Coordinates": {
      "lat": 40.6877,
      "lng": -73.9267
    }
  },
  {
    "Id": 231,
    "Name": "PS 1 Playground",
    "Location": "43 St., 47 St. and 3 Ave.",
    "Coordinates": {
      "lat": 40.6493,
      "lng": -74.0121
    }
  },
  {
    "Id": 232,
    "Name": "PS 23 Playground",
    "Location": "Tompkins, Willoughby and Vernon Aves.",
    "Coordinates": {
      "lat": 40.6942,
      "lng": -73.9469
    }
  },
  {
    "Id": 233,
    "Name": "PS 286 Playground",
    "Location": "Ave. Y, between Brown and Haring Sts.",
    "Coordinates": {
      "lat": 40.5908,
      "lng": -73.9384
    }
  },
  {
    "Id": 234 ,
    "Name": "PS 84 William Sheridan",
    "Location": "Wythe Ave. to Berry St. and Grand to S 1 Sts.",
    "Coordinates": {
      "lat": 40.7153,
      "lng": -73.9644
    }
  },
  {
    "Id": 235,
    "Name": "Pulaski Playground",
    "Location": "Sumner Ave. between Hart and Pulaski Sts.",
    "Coordinates": {
      "lat": 40.6936,
      "lng": -73.9419
    }
  },
  {
    "Id": 236,
    "Name": "Rainbow Park",
    "Location": "55 and 56 Sts. at 6 Ave.",
    "Coordinates": {
      "lat": 40.6405,
      "lng": -74.0109
    }
  },
  {
    "Id": 237,
    "Name": "Rappaport Playground",
    "Location": "Ft. Hamilton Pkwy., 10 Ave. and 52 to 53 Sts.",
    "Coordinates": {
      "lat": 40.6368,
      "lng": -74.0006
    }
  },
  {
    "Id": 238,
    "Name": "Red Hook Park",
    "Location": "King, Richards, Verona, Dwight, and Pioneer Sts.",
    "Coordinates": {
      "lat": 40.6772,
      "lng": -74.0091
    }
  },
  {
    "Id": 239,
    "Name": "Red Hook Recreation Area",
    "Location": "Lorraine, Clinton and Henry Sts.",
    "Coordinates": {
      "lat": 40.6738,
      "lng": -74.0039
    }
  },
  {
    "Id": 240,
    "Name": "Remsen Playground",
    "Location": "Remsen Ave., Glenwood Rd., E 92 St. and Bay View Pl.",
    "Coordinates": {
      "lat": 40.6423,
      "lng": -73.9075
    }
  },
  {
    "Id": 241,
    "Name": "Rodney Park North",
    "Location": "Rodney, S 4 St. and S 5 St.",
    "Coordinates": {
      "lat": 40.7092,
      "lng": -73.9563
    }
  },
  {
    "Id": 242,
    "Name": "Roebling Playground",
    "Location": "Wilson Ave., Lee Ave., Taylor St. and Bedford Ave.",
    "Coordinates": {
      "lat": 40.7063,
      "lng": -73.9618
    }
  },
  {
    "Id": 243,
    "Name": "Russell Pederson Playground",
    "Location": "S W Corner 83 St. & Colonial Rd.",
    "Coordinates": {
      "lat": 40.6261,
      "lng": -74.0361
    }
  },
  {
    "Id": 244,
    "Name": "Sam Curtis Park",
    "Location": "S S Foster Ave., E 81 St. and E 82 St.",
    "Coordinates": {
      "lat": 40.6409,
      "lng": -73.9174
    }
  },
  {
    "Id": 245,
    "Name": "Scarangella Park",
    "Location": "Ave. V, Stillwell Ave., Ave. U and W 13 St.",
    "Coordinates": {
      "lat": 40.5947,
      "lng": -73.9843
    }
  },
  {
    "Id": 246,
    "Name": "Schenk Playground",
    "Location": "Livonia Ave., Barbey St. and Schenck Ave.",
    "Coordinates": {
      "lat": 40.6656,
      "lng": -73.8861
    }
  },
  {
    "Id": 247,
    "Name": "Sgt. William Dougherty Playground",
    "Location": "Anthony St., Vandervoort Ave., and Cherry St.",
    "Coordinates": {
      "lat": 40.7239,
      "lng": -73.9372
    }
  },
  {
    "Id": 248,
    "Name": "Sheepshead Playground",
    "Location": "Ave. Z and Nostrand Ave. to E. 29 St.",
    "Coordinates": {
      "lat": 40.5887,
      "lng": -73.9404
    }
  },
  {
    "Id": 249,
    "Name": "Shore Road Park",
    "Location": "79th Street & Shore Road",
    "Coordinates": {
      "lat": 40.6312,
      "lng": -74.0397
    }
  },
  {
    "Id": 250,
    "Name": "Sixteen Sycamores Playground",
    "Location": "Schermerhorn St., 3 Ave. and Nevins St.",
    "Coordinates": {
      "lat": 40.686,
      "lng": -73.981
    }
  },
  {
    "Id": 251,
    "Name": "St. Andrew's Playground",
    "Location": "Atlantic Ave., Herkimer St. and Kingston Ave.",
    "Coordinates": {
      "lat": 40.6784,
      "lng": -73.9418
    }
  },
  {
    "Id": 252,
    "Name": "St. John's Recreation Center",
    "Location": "Bergen St. between Troy and Schenectady Aves.",
    "Coordinates": {
      "lat": 40.673,
      "lng": -73.934
    }
  },
  {
    "Id": 253,
    "Name": "St. Mary's Playground",
    "Location": "Smith St. between Luquer and Nelson Sts.",
    "Coordinates": {
      "lat": 40.6764,
      "lng": -73.9972
    }
  },
  {
    "Id": 254,
    "Name": "Stephen A. Rudd Playground",
    "Location": "Bushwich Ave., Aberdeen and Granite Sts.",
    "Coordinates": {
      "lat": 40.683,
      "lng": -73.9054
    }
  },
  {
    "Id": 255,
    "Name": "Stockton Playground",
    "Location": "Park Ave., Floyd St. and E O Marcy Ave.",
    "Coordinates": {
      "lat": 40.697,
      "lng": -73.949
    }
  },
  {
    "Id": 256,
    "Name": "Stroud Playground",
    "Location": "Classon Ave., Sterling Pl. and Park Pl.",
    "Coordinates": {
      "lat": 40.6749,
      "lng": -73.9618
    }
  },
  {
    "Id": 257,
    "Name": "Sumner Houses Playground PS 59",
    "Location": "Sumner, Throop, Park and Myrtle Aves.",
    "Coordinates": {
      "lat": 40.697,
      "lng": -73.943
    }
  },
  {
    "Id": 258,
    "Name": "Sunset Park",
    "Location": "41 to 44 Sts. and 5 to 7 Aves.",
    "Coordinates": {
      "lat": 40.6481,
      "lng": -74.0031
    }
  },
  {
    "Id": 259,
    "Name": "Surf Playground",
    "Location": "Surf Ave, W 25 and W 27 Sts.",
    "Coordinates": {
      "lat": 40.5738,
      "lng": -73.9924
    }
  },
  {
    "Id": 260,
    "Name": "Taaffe Playground",
    "Location": "Park to Myrtle Aves. and Taaffe Pl.",
    "Coordinates": {
      "lat": 40.6953,
      "lng": -73.9607
    }
  },
  {
    "Id": 261,
    "Name": "Ten Eyck Playground PS 196 Playground",
    "Location": "Bushwick Ave., Scholes St. and Messerole St.",
    "Coordinates": {
      "lat": 40.709,
      "lng": -73.939
    }
  },
  {
    "Id": 262,
    "Name": "Thelma Martinez Playground",
    "Location": "Scholes St. and Manhattan to Graham Aves.",
    "Coordinates": {
      "lat": 40.7093,
      "lng": -73.9442
    }
  },
  {
    "Id": 263,
    "Name": "Tiger Playground",
    "Location": "Evergreen Ave., Eldert St. and Covert St.",
    "Coordinates": {
      "lat": 40.6882,
      "lng": -73.9106
    }
  },
  {
    "Id": 264,
    "Name": "Tilden Playground",
    "Location": "Tilden Ave. and E 48 to E 49 Sts.",
    "Coordinates": {
      "lat": 40.6476,
      "lng": -73.9317
    }
  },
  {
    "Id": 265,
    "Name": "West Playground",
    "Location": "N S Ave. Z between West St. and W 1 St.",
    "Coordinates": {
      "lat": 40.5876,
      "lng": -73.9705
    }
  },
  {
    "Id": 266,
    "Name": "William Grady HS Playground",
    "Location": "Shore Pkwy., Brighton 3 St. and 4 Rd.",
    "Coordinates": {
      "lat": 40.5825,
      "lng": -73.9647
    }
  },
  {
    "Id": 267,
    "Name": "Wilson Playground",
    "Location": "Ave. J, Ave. K, E 100 and E 101 Sts.",
    "Coordinates": {
      "lat": 40.6421,
      "lng": -73.8947
    }
  },
  {
    "Id": 268,
    "Name": "Woodruff Playground PS 224 Playground",
    "Location": "Stanley Ave., Autumn Ave. and Hemlock St.",
    "Coordinates": {
      "lat": 40.6652,
      "lng": -73.8662
    }
  },
  {
    "Id": 269,
    "Name": "Woods Playground",
    "Location": "Bergen St., Utica Ave., Rochester & St. Mark's Ave.",
    "Coordinates": {
      "lat": 40.6746,
      "lng": -73.9286
    }
  },
  {
    "Id": 270,
    "Name": "24 Sycamores Playground",
    "Location": "1 Ave. & E. 96 St.",
    "Coordinates": {
      "lat": 40.7595,
      "lng": -73.9586
    }
  },
  {
    "Id": 271,
    "Name": "76 St. Playground",
    "Location": "W. 76 St. & Riverside Drive",
    "Coordinates": {
      "lat": 40.783,
      "lng": -73.985
    }
  },
  {
    "Id": 272,
    "Name": "Abraham Lincoln Playground",
    "Location": "135 St. & Madison Ave.",
    "Coordinates": {
      "lat": 40.8122,
      "lng": -73.9376
    }
  },
  {
    "Id": 273,
    "Name": "Al Smith Recreations Center",
    "Location": "Catherine St.",
    "Coordinates": {
      "lat": 40.7104,
      "lng": -73.9975
    }
  },
  {
    "Id": 274,
    "Name": "Alfred E. Smith Playground",
    "Location": "Madison and Catherine Sts. to Oliver St.",
    "Coordinates": {
      "lat": 40.7122,
      "lng": -73.9974
    }
  },
  {
    "Id": 275,
    "Name": "Asser Levy Playground",
    "Location": "E. 23 St. & FDR Drive",
    "Coordinates": {
      "lat": 40.7364,
      "lng": -73.9753
    }
  },
  {
    "Id": 276,
    "Name": "Audubon Playground",
    "Location": "170 St. & Audubon Ave.",
    "Coordinates": {
      "lat": 40.8414,
      "lng": -73.9385
    }
  },
  {
    "Id": 277,
    "Name": "Augustus Saint-Garden's Playground",
    "Location": "E. 19 St. & 2 Ave.",
    "Coordinates": {
      "lat": 40.7353,
      "lng": -73.9821
    }
  },
  {
    "Id": 278,
    "Name": "Baruch Playground",
    "Location": "Rivington St. & Baruch Place",
    "Coordinates": {
      "lat": 40.7172,
      "lng": -73.9766
    }
  },
  {
    "Id": 279,
    "Name": "Bellevue South Playground",
    "Location": "E. 26 St. & 2 Ave.",
    "Coordinates": {
      "lat": 40.7397,
      "lng": -73.9785
    }
  },
  {
    "Id": 280,
    "Name": "Blake Hobbs Park",
    "Location": "104 St. & 2 Ave.",
    "Coordinates": {
      "lat": 40.7885,
      "lng": -73.9443
    }
  },
  {
    "Id": 281,
    "Name": "Bloomingdale Playground",
    "Location": "W. 104 St. & Amsterdam Ave.",
    "Coordinates": {
      "lat": 40.799,
      "lng": -73.966
    }
  },
  {
    "Id": 282,
    "Name": "Bo Jangles Playground",
    "Location": "W. 150 St. & 7 Ave.",
    "Coordinates": {
      "lat": 40.8253,
      "lng": -73.9372
    }
  },
  {
    "Id": 283,
    "Name": "Booker T. Washington Playground",
    "Location": "W. 108 St. & Columbus Ave.",
    "Coordinates": {
      "lat": 40.8011,
      "lng": -73.9641
    }
  },
  {
    "Id": 284,
    "Name": "Carl Schurz Park",
    "Location": "E. 84 St. & York Ave.",
    "Coordinates": {
      "lat": 40.7739,
      "lng": -73.9441
    }
  },
  {
    "Id": 285,
    "Name": "Carmansville Playground",
    "Location": "W. 151 to 152 Sts. and Amsterdam Ave.",
    "Coordinates": {
      "lat": 40.8294,
      "lng": -73.9443
    }
  },
  {
    "Id": 286,
    "Name": "Central Park",
    "Location": "North Meadow (mid-park at 97th Street)",
    "Coordinates": {
      "lat": 40.7911,
      "lng": -73.9598
    }
  },
  {
    "Id": 287,
    "Name": "Central Park",
    "Location": "Great Lawn",
    "Coordinates": {
      "lat": 40.7826,
      "lng": -73.9644
    }
  },
  {
    "Id": 288,
    "Name": "Chelsea Park",
    "Location": "W. 28 St. between 9 and 10 Aves.",
    "Coordinates": {
      "lat": 40.7498,
      "lng": -74.0004
    }
  },
  {
    "Id": 289,
    "Name": "Cherry Playground",
    "Location": "Clinton, Cherry and Water Sts.",
    "Coordinates": {
      "lat": 40.7113,
      "lng": -73.9861
    }
  },
  {
    "Id": 290,
    "Name": "Cherry Tree Park",
    "Location": "E. 99 St. & 3 Ave.",
    "Coordinates": {
      "lat": 40.7875,
      "lng": -73.9471
    }
  },
  {
    "Id": 291,
    "Name": "Col. Young Playground (Front)",
    "Location": "W. 145 St. & Lenox Ave.",
    "Coordinates": {
      "lat": 40.8201,
      "lng": -73.9361
    }
  },
  {
    "Id": 292,
    "Name": "Col. Young Playground (Rear)",
    "Location": "W. 143 to 144 St. and Hudson River Dr.",
    "Coordinates": {
      "lat": 40.8187,
      "lng": -73.9348
    }
  },
  {
    "Id": 293,
    "Name": "Columbus Park",
    "Location": "Worth & Mulberry Sts.",
    "Coordinates": {
      "lat": 40.7145,
      "lng": -74
    }
  },
  {
    "Id": 294,
    "Name": "Corp. Seravalli Park",
    "Location": "Hudson St. between Gansevoort and Horatio Sts.",
    "Coordinates": {
      "lat": 40.7391,
      "lng": -74.0046
    }
  },
  {
    "Id": 295,
    "Name": "Courtney Callender Playground",
    "Location": "130 to 131 Sts. and 5th Ave.",
    "Coordinates": {
      "lat": 40.809,
      "lng": -73.94
    }
  },
  {
    "Id": 296,
    "Name": "Crack is Wack",
    "Location": "E. 128 St. & 2 Ave.",
    "Coordinates": {
      "lat": 40.8044,
      "lng": -73.9318
    }
  },
  {
    "Id": 297,
    "Name": "DeSalvio Playground",
    "Location": "Spring & Mulberry Sts.",
    "Coordinates": {
      "lat": 40.8009,
      "lng": -73.9309
    }
  },
  {
    "Id": 298,
    "Name": "De Witt Clinton Park",
    "Location": "W. 53rd St. between 11 and 12 Aves.",
    "Coordinates": {
      "lat": 40.7685,
      "lng": -73.9947
    }
  },
  {
    "Id": 299,
    "Name": "Dry Dock Park",
    "Location": "E. 10 St. & Ave. D",
    "Coordinates": {
      "lat": 40.7253,
      "lng": -73.9752
    }
  },
  {
    "Id": 300,
    "Name": "East River Park",
    "Location": "E. 10 St. & FDR Drive",
    "Coordinates": {
      "lat": 40.7249,
      "lng": -73.9724
    }
  },
  {
    "Id": 301,
    "Name": "East River Playground   PS 146",
    "Location": "106 St. & FDR Drive",
    "Coordinates": {
      "lat": 40.7891,
      "lng": -73.9385
    }
  },
  {
    "Id": 302,
    "Name": "Essex Playground",
    "Location": "Essex, Norfolk and E. Houston St.",
    "Coordinates": {
      "lat": 40.721,
      "lng": -73.986
    }
  },
  {
    "Id": 303,
    "Name": "First Park",
    "Location": "E. Houston to E. 1 St.",
    "Coordinates": {
      "lat": 40.7235,
      "lng": -73.9898
    }
  },
  {
    "Id": 304,
    "Name": "Fred Samuels Playground",
    "Location": "139 to 140 Sts. and Lenox Ave.",
    "Coordinates": {
      "lat": 40.8173,
      "lng": -73.9392
    }
  },
  {
    "Id": 305,
    "Name": "Frederick Douglass Playground",
    "Location": "W. 100 to 102 Sts. and Amsterdam Ave.",
    "Coordinates": {
      "lat": 40.7969,
      "lng": -73.9679
    }
  },
  {
    "Id": 306,
    "Name": "Ft. George Playground",
    "Location": "Ft. George Ave. & W. 192 St.",
    "Coordinates": {
      "lat": 40.8579,
      "lng": -73.9247
    }
  },
  {
    "Id": 307,
    "Name": "Ft. Washington Playground",
    "Location": "161st Street & Henry Hudson Parkway",
    "Coordinates": {
      "lat": 40.8385,
      "lng": -73.9485
    }
  },
  {
    "Id": 308,
    "Name": "Grand & Canal Courts",
    "Location": "Grand & Canal Sts.",
    "Coordinates": {
      "lat": 40.7222,
      "lng": -74.0051
    }
  },
  {
    "Id": 309,
    "Name": "Gulick Playground",
    "Location": "Columbia & Delancey Sts.",
    "Coordinates": {
      "lat": 40.7159,
      "lng": -73.9819
    }
  },
  {
    "Id": 310,
    "Name": "Gutenberg PlaygroundLa Gu",
    "Location": "W. 49 St. between 9 and 10 Aves.",
    "Coordinates": {
      "lat": 40.7636,
      "lng": -73.9902
    }
  },
  {
    "Id": 311,
    "Name": "Hamilton Fish Playground",
    "Location": "128 Pitt St.",
    "Coordinates": {
      "lat": 40.7194,
      "lng": -73.9806
    }
  },
  {
    "Id": 312,
    "Name": "Hamilton Place",
    "Location": "W. 140 St. & Hamilton Pl.",
    "Coordinates": {
      "lat": 40.8229,
      "lng": -73.9515
    }
  },
  {
    "Id": 313,
    "Name": "Happy Warrior Playground",
    "Location": "W. 98 Sts. & Amsterdam Ave.",
    "Coordinates": {
      "lat": 40.7956,
      "lng": -73.9683
    }
  },
  {
    "Id": 314,
    "Name": "Harlem Lane Playground",
    "Location": "151 to 154 Sts. and Hudson River Drive",
    "Coordinates": {
      "lat": 40.826,
      "lng": -73.9348
    }
  },
  {
    "Id": 315,
    "Name": "Hell's Kitchen Park",
    "Location": "W. 47 St. & 10 Ave.",
    "Coordinates": {
      "lat": 40.763,
      "lng": -73.9926
    }
  },
  {
    "Id": 316,
    "Name": "Highbridge Play Center (Indoors)",
    "Location": "W. 173 St. & Amsterdam Ave.",
    "Coordinates": {
      "lat": 40.8426,
      "lng": -73.9337
    }
  },
  {
    "Id": 317,
    "Name": "Greg Marius Court",
    "Location": "156 St. & 8 Ave.",
    "Coordinates": {
      "lat": 40.8295,
      "lng": -73.9363
    }
  },
  {
    "Id": 318,
    "Name": "Howard Bennett Playground",
    "Location": "135 St. & Lenox Terrace",
    "Coordinates": {
      "lat": 40.8135,
      "lng": -73.9387
    }
  },
  {
    "Id": 319,
    "Name": "Inwood Park",
    "Location": "207 St.",
    "Coordinates": {
      "lat": 40.870,
      "lng": -73.922
    }
  },
  {
    "Id": 320,
    "Name": "J. Hood Wright Playground (*Under Construction)",
    "Location": "176 St. & Ft. Washington Ave.",
    "Coordinates": {
      "lat": 40.8466,
      "lng": -73.9406
    }
  },
  {
    "Id": 321,
    "Name": "Jackie Robinson Park",
    "Location": "150 St. & Bradhurst Ave.",
    "Coordinates": {
      "lat": 40.8266,
      "lng": -73.9408
    }
  },
  {
    "Id": 322,
    "Name": "Jackson Playground",
    "Location": "Jackson St. between Madison & Henry Sts.",
    "Coordinates": {
      "lat": 40.7139,
      "lng": -73.9813
    }
  },
  {
    "Id": 323,
    "Name": "Jacob Javits Playground",
    "Location": "Cabrini Blvd. & Cobrin Circle",
    "Coordinates": {
      "lat": 40.8591,
      "lng": -73.9349
    }
  },
  {
    "Id": 324,
    "Name": "Jacob Schiff Playground",
    "Location": "W. 136 St. & Amsterdam Ave.",
    "Coordinates": {
      "lat": 40.8203,
      "lng": -73.9524
    }
  },
  {
    "Id": 325,
    "Name": "James Weldon Playground   PS 57",
    "Location": "E. 115 St. & Lexington Ave.",
    "Coordinates": {
      "lat": 40.7973,
      "lng": -73.9419
    }
  },
  {
    "Id": 326,
    "Name": "John Jay Park",
    "Location": "E. 77 St. & FDR Drive",
    "Coordinates": {
      "lat": 40.7687,
      "lng": -73.9498
    }
  },
  {
    "Id": 327,
    "Name": "Kelly Playground",
    "Location": "W. 17 St. between 8 and 9 Aves.",
    "Coordinates": {
      "lat": 40.741,
      "lng": -74.002
    }
  },
  {
    "Id": 328,
    "Name": "Kett Playground",
    "Location": "W. 204 St. & Nagles Ave.",
    "Coordinates": {
      "lat": 40.8624,
      "lng": -73.9211
    }
  },
  {
    "Id": 329,
    "Name": "La Guardia Hospital Playground-Rutgers Pool Little Flower Playground",
    "Location": "Madison St. opposite Jefferson St.",
    "Coordinates": {
      "lat": 40.7124,
      "lng": -73.9883
    }
  },
  {
    "Id": 330,
    "Name": "Marcus Garvey Park",
    "Location": "E. 120 to 124 Sts. and Madison Ave.",
    "Coordinates": {
      "lat": 40.8033,
      "lng": -73.9431
    }
  },
  {
    "Id": 331,
    "Name": "Martin Luther King Jr. Playground",
    "Location": "113 to 114 St. and Lenox Ave.",
    "Coordinates": {
      "lat": 40.7999,
      "lng": -73.9503
    }
  },
  {
    "Id": 332,
    "Name": "May Mathews Playground",
    "Location": "W. 46 St. between 9 and 10 Aves.",
    "Coordinates": {
      "lat": 40.7614,
      "lng": -73.9926
    }
  },
  {
    "Id": 333,
    "Name": "McCaffrey Playground",
    "Location": "W. 43 St. between 8 and 9 Aves.",
    "Coordinates": {
      "lat": 40.759,
      "lng": -73.9911
    }
  },
  {
    "Id": 334,
    "Name": "McKinley Playground",
    "Location": "Ave. A between E. 3 St. and E. 4 St.",
    "Coordinates": {
      "lat": 40.7242,
      "lng": -73.9857
    }
  },
  {
    "Id": 335,
    "Name": "Moore Playground   PS 133",
    "Location": "E. 131 St. & Madison Ave.",
    "Coordinates": {
      "lat": 40.8095,
      "lng": -73.9386
    }
  },
  {
    "Id": 336,
    "Name": "Morningside Park",
    "Location": "W. 113 St. & Morningside",
    "Coordinates": {
      "lat": 40.803,
      "lng": -73.958
    }
  },
  {
    "Id": 337,
    "Name": "Morningside Park",
    "Location": "W. 116 St. & Morningside",
    "Coordinates": {
      "lat": 40.8074,
      "lng": -73.9573
    }
  },
  {
    "Id": 338,
    "Name": "Morningside Park",
    "Location": "W. 123 St. & Morningside",
    "Coordinates": {
      "lat": 40.8107,
      "lng": -73.9551
    }
  },
  {
    "Id": 339,
    "Name": "Morningside Playground",
    "Location": "E. 118 St. & 2 Ave.",
    "Coordinates": {
      "lat": 40.7975,
      "lng": -73.9356
    }
  },
  {
    "Id": 340,
    "Name": "Multi Purpose Playground",
    "Location": "W. 175 St. & Amsterdam Ave.",
    "Coordinates": {
      "lat": 40.8448,
      "lng": -73.9328
    }
  },
  {
    "Id": 341,
    "Name": "Murphy Playground",
    "Location": "Ave. C & E. 17 St.",
    "Coordinates": {
      "lat": 40.7304,
      "lng": -73.9738
    }
  },
  {
    "Id": 342,
    "Name": "Penn South Playground",
    "Location": "W. 26 St. between 8 and 9 Aves.",
    "Coordinates": {
      "lat": 40.7478,
      "lng": -73.9989
    }
  },
  {
    "Id": 343,
    "Name": "Peters Field Playground",
    "Location": "2 Ave., E. 20 St. and E. 21 St.",
    "Coordinates": {
      "lat": 40.7363,
      "lng": -73.9818
    }
  },
  {
    "Id": 344,
    "Name": "Playground 103",
    "Location": "103rd St. & FDR Drive",
    "Coordinates": {
      "lat": 40.787,
      "lng": -73.9393
    }
  },
  {
    "Id": 345,
    "Name": "Playground 70",
    "Location": "W 70 St., West End Ave, and Amsterdam Ave.",
    "Coordinates": {
      "lat": 40.7771,
      "lng": -73.9837
    }
  },
  {
    "Id": 346,
    "Name": "Poor Richard Playground",
    "Location": "E. 109 St. & 3 Ave.",
    "Coordinates": {
      "lat": 40.7926,
      "lng": -73.9433
    }
  },
  {
    "Id": 347,
    "Name": "PS 125 Playground",
    "Location": "Morningside Ave. and W. 123 to 124 Sts.",
    "Coordinates": {
      "lat": 40.811,
      "lng": -73.956
    }
  },
  {
    "Id": 348,
    "Name": "Renaissance Playground",
    "Location": "143 to 144 St. and 8 Ave.",
    "Coordinates": {
      "lat": 40.8211,
      "lng": -73.9415
    }
  },
  {
    "Id": 349,
    "Name": "Riverbank Park",
    "Location": "148 St. & Henry Hudson Parkway",
    "Coordinates": {
      "lat": 40.8257,
      "lng": -73.9538
    }
  },
  {
    "Id": 350,
    "Name": "Robert Moses Playground",
    "Location": "E. 42 St. & FDR Drive",
    "Coordinates": {
      "lat": 40.7484,
      "lng": -73.9693
    }
  },
  {
    "Id": 351,
    "Name": "Robert Wagner Playground",
    "Location": "E. 121 St. & 2 Ave.",
    "Coordinates": {
      "lat": 40.7484,
      "lng": -73.9693
    }
  },
  {
    "Id": 352,
    "Name": "Samuel Bennerson",
    "Location": "W. 63 to 64 Sts. between West End & Amsterdam Aves.",
    "Coordinates": {
      "lat": 40.7738,
      "lng": -73.9867
    }
  },
  {
    "Id": 353,
    "Name": "Sara D. Roosevelt Park (A)",
    "Location": "Stanton St.",
    "Coordinates": {
      "lat": 40.7231,
      "lng": -73.9909
    }
  },
  {
    "Id": 354,
    "Name": "Sara D. Roosevelt Park (B)",
    "Location": "Delancey St. between Forsythe and Christie Sts.",
    "Coordinates": {
      "lat": 40.7221,
      "lng": -73.9914
    }
  },
  {
    "Id": 355,
    "Name": "Sara D. Roosevelt Park (D)",
    "Location": "Canal to Hester Sts.",
    "Coordinates": {
      "lat": 40.7175,
      "lng": -73.9937
    }
  },
  {
    "Id": 356,
    "Name": "Seabury Playground",
    "Location": "Lexington Ave. & E. 95 St.",
    "Coordinates": {
      "lat": 40.7853,
      "lng": -73.9511
    }
  },
  {
    "Id": 357,
    "Name": "Seward Park",
    "Location": "Canal, Hester and Jefferson Sts.",
    "Coordinates": {
      "lat": 40.7148,
      "lng": -73.9892
    }
  },
  {
    "Id": 358,
    "Name": "Sidney Hillman   PS 110",
    "Location": "Lewis & Delancey Sts.",
    "Coordinates": {
      "lat": 40.7151,
      "lng": -73.9798
    }
  },
  {
    "Id": 359,
    "Name": "Sol Bloom Playground",
    "Location": "W. 70 St. between Central Park West and Columbus Ave.",
    "Coordinates": {
      "lat": 40.7896,
      "lng": -73.9685
    }
  },
  {
    "Id": 360,
    "Name": "Sol Lain Playground",
    "Location": "E. Bway & Henry St.",
    "Coordinates": {
      "lat": 40.7144,
      "lng": -73.9839
    }
  },
  {
    "Id": 361,
    "Name": "St. Catherine's Park",
    "Location": "1 Ave. and E. 67 to 68 Sts.",
    "Coordinates": {
      "lat": 40.7654,
      "lng": -73.9592
    }
  },
  {
    "Id": 362,
    "Name": "St. Nicholas Park",
    "Location": "W. 141 St. & St. Nicholas Ave.",
    "Coordinates": {
      "lat": 40.816,
      "lng": -73.9489
    }
  },
  {
    "Id": 363,
    "Name": "St. Nicholas Park",
    "Location": "W. 133 St. & St. Nicholas Ave.",
    "Coordinates": {
      "lat": 40.8213,
      "lng": -73.9467
    }
  },
  {
    "Id": 364,
    "Name": "St. Nicholas Playground (North)",
    "Location": "129 to 130 St. & 7 Ave.",
    "Coordinates": {
      "lat": 40.8123,
      "lng": -73.9469
    }
  },
  {
    "Id": 365,
    "Name": "St. Nicholas Playground (South)",
    "Location": "128 St. & 7 Ave.",
    "Coordinates": {
      "lat": 40.8111,
      "lng": -73.9475
    }
  },
  {
    "Id": 366,
    "Name": "St. Nicholas Terrace",
    "Location": "W. 129 St. & St. Nicholas Ave.",
    "Coordinates": {
      "lat": 40.8131,
      "lng": -73.9512
    }
  },
  {
    "Id": 367,
    "Name": "St. Vartan's Playground",
    "Location": "2 Ave. and E. 35 to E. 36 Sts.",
    "Coordinates": {
      "lat": 40.7457,
      "lng": -73.9746
    }
  },
  {
    "Id": 368,
    "Name": "Stanley Isaacs Playground",
    "Location": "1 Ave. & E. 96 St.",
    "Coordinates": {
      "lat": 40.7835,
      "lng": -73.9442
    }
  },
  {
    "Id": 369,
    "Name": "Sunken Playground",
    "Location": "W. 167 St. & Edgecombe Ave.",
    "Coordinates": {
      "lat": 40.8376,
      "lng": -73.9362
    }
  },
  {
    "Id": 370,
    "Name": "Tanahey Playground",
    "Location": "Cherry St. to Water St.",
    "Coordinates": {
      "lat": 40.7101,
      "lng": -73.9948
    }
  },
  {
    "Id": 371,
    "Name": "Tecumseh Playground",
    "Location": "W. 77 St. & Amsterdam Ave.",
    "Coordinates": {
      "lat": 40.7816,
      "lng": -73.9785
    }
  },
  {
    "Id": 372,
    "Name": "Thomas Jefferson Park",
    "Location": "2180 1 Ave.",
    "Coordinates": {
      "lat": 40.7923,
      "lng": -73.9356
    }
  },
  {
    "Id": 373,
    "Name": "Thompson Playground",
    "Location": "Thompson & Spring Sts.",
    "Coordinates": {
      "lat": 40.7253,
      "lng": -74.0024
    }
  },
  {
    "Id": 374,
    "Name": "Tompkins Sq. Park",
    "Location": "E 10 St. & Ave. B",
    "Coordinates": {
      "lat": 40.7268,
      "lng": -73.9807
    }
  },
  {
    "Id": 375,
    "Name": "Wallenburg Playground",
    "Location": "W. 189 St. & Amsterdam Ave.",
    "Coordinates": {
      "lat": 40.8533,
      "lng": -73.9267
    }
  },
  {
    "Id": 376,
    "Name": "West 4th St. Courts",
    "Location": "W. 4th St. & 6th Avenue",
    "Coordinates": {
      "lat": 40.7311,
      "lng": -74.0011
    }
  },
  {
    "Id": 377,
    "Name": "White Playground",
    "Location": "E. 105 St. & Lexington Ave.",
    "Coordinates": {
      "lat": 40.7919,
      "lng": -73.9459
    }
  },
  {
    "Id": 378,
    "Name": "William McCray Playground",
    "Location": "138 St. between Lenox and 5 Ave.",
    "Coordinates": {
      "lat": 40.815,
      "lng": -73.938
    }
  },
  {
    "Id": 379,
    "Name": "Wright Brothers   PS 28",
    "Location": "St. Nicholas Ave. & W. 156 St.",
    "Coordinates": {
      "lat": 40.831,
      "lng": -73.942
    }
  },
  {
    "Id": 380,
    "Name": "Albert H. Mauro",
    "Location": "Park Dr. East & 73 Terrace",
    "Coordinates": {
      "lat": 40.724,
      "lng": -73.8275
    }
  },
  {
    "Id": 381,
    "Name": "Alley Playground PS 213",
    "Location": "230th St. & 67th Ave.",
    
    "Coordinates": {
      "lat": 40.747,
      "lng": -73.745
    }
  },
  {
    "Id": 382,
    "Name": "Annadale Playground",
    "Location": "Yellowstone Blvd., 65 Rd. & 65 Ave",
    
    "Coordinates": {
      "lat": 40.731,
      "lng": -73.8519
    }
  },
  {
    "Id": 383,
    "Name": "Arverne Playground",
    "Location": "Averne Blvd. & Beach 55 St.",
    "Coordinates": {
      "lat": 40.592,
      "lng": -73.785
    }
  },
  {
    "Id": 384,
    "Name": "Auburndale Playground",
    "Location": "35 Ave. between 171 and 172 Sts.",
    
    "Coordinates": {
      "lat": 40.7656,
      "lng": -73.7944
    }
  },
  {
    "Id": 385,
    "Name": "Barrier Playground",
    "Location": "102 St., 62 Ave. & Yellowstone Blvd.",
    
    "Coordinates": {
      "lat": 40.7362,
      "lng": -73.8549
    }
  },
  {
    "Id": 386,
    "Name": "Bay Terrace Playground PS 169",
    "Location": "NE Corner of 212 St. & 23Ave.",
    "Coordinates": {
      "lat": 40.7821,
      "lng": -73.7776
    }
  },
  {
    "Id": 387,
    "Name": "Bayswater Park",
    "Location": "Beach Channel Dr. & Beach 32 St.",
    "Coordinates": {
      "lat": 40.5992,
      "lng": -73.7674
    }
  },
  {
    "Id": 388,
    "Name": "Bland Playground",
    "Location": "40 Rd. & Prince St.",
    "Coordinates": {
      "lat": 40.7583,
      "lng": -73.8309
    }
  },
  {
    "Id": 389,
    "Name": "Bowne Park",
    "Location": "32 Ave., 29 Ave. and 155 to 159 Sts.",
    "Coordinates": {
      "lat": 40.7703,
      "lng": -73.8058
    }
  },
  {
    "Id": 390,
    "Name": "Bowne Playground",
    "Location": "Sanford Ave. & Union St.",
    
    "Coordinates": {
      "lat": 40.7581,
      "lng": -73.8249
    }
  },
  {
    "Id": 391,
    "Name": "Briarwood Playground",
    "Location": "148 St. & 85 Ave.",
    "Coordinates": {
      "lat": 40.71,
      "lng": -73.8113
    }
  },
  {
    "Id": 392,
    "Name": "Broad Channel",
    "Location": "Cross Bay Blvd. & E 16 Rd.",
    "Coordinates": {
      "lat": 40.6012,
      "lng": -73.8197
    }
  },
  {
    "Id": 393,
    "Name": "Bulova Park",
    "Location": "W S 77 St. and N S 25 Ave.",
    "Coordinates": {
      "lat": 40.763,
      "lng": -73.8921
    }
  },
  {
    "Id": 394,
    "Name": "Buz O' Rourke P G",
    "Location": "33 Ave. & 214 Pl.",
    "Coordinates": {
      "lat": 40.771,
      "lng": -73.7712
    }
  },
  {
    "Id": 395,
    "Name": "C.C. Moore Homestead Park",
    "Location": "82 St. & Broadway",
    "Coordinates": {
      "lat": 40.7418,
      "lng": -73.8819
    }
  },
  {
    "Id": 396,
    "Name": "Cadwaller Colden Playground",
    "Location": "Union St. & 31 Rd.",
    "Coordinates": {
      "lat": 40.77,
      "lng": -73.8274
    }
  },
  {
    "Id": 397,
    "Name": "Capt. Mario Fajardo",
    "Location": "Kissena Blvd. & Booth Memorial Blvd.",
    "Coordinates": {
      "lat": 40.7437,
      "lng": -73.8147
    }
  },
  {
    "Id": 398,
    "Name": "Cedar Grove Playground (P.S. 218)",
    "Location": "Main St. & Gravett Rd.",
    "Coordinates": {
      "lat": 40.7361,
      "lng": -73.8244
    }
  },
  {
    "Id": 399,
    "Name": "Centerville",
    "Location": "96 St., Centerville St. and Albert Rd.",
    "Coordinates": {
      "lat": 40.6705,
      "lng": -73.8395
    }
  },
  {
    "Id": 400,
    "Name": "Challenge Playground",
    "Location": "251 St. & 63 Ave.",
    "Coordinates": {
      "lat": 40.7561,
      "lng": -73.7275
    }
  },
  {
    "Id": 401,
    "Name": "Clintonville Playground JHS 194",
    "Location": "Clintonville St. between 17 Ave. and 17 Rd.",
    "Coordinates": {
      "lat": 40.783,
      "lng": -73.8074
    }
  },
  {
    "Id": 402,
    "Name": "College Point Park",
    "Location": "College Pt. Blvd. & 14 Ave.",
    "Coordinates": {
      "lat": 40.7854,
      "lng": -73.8464
    }
  },
  {
    "Id": 403,
    "Name": "Corona Golf",
    "Location": "46 Ave. & 111 St.",
    "Coordinates": {
      "lat": 40.747,
      "lng": -73.855
    }
  },
  {
    "Id": 404,
    "Name": "Crowley",
    "Location": "84 St. & 57 Ave.",
    "Coordinates": {
      "lat": 40.7296,
      "lng": -73.8793
    }
  },
  {
    "Id": 405,
    "Name": "Cunningham Park - Upper Playground",
    "Location": "196 Pl. & Union Turnpike",
    
    "Coordinates": {
      "lat": 40.7262,
      "lng": -73.7753
    }
  },
  {
    "Id": 406,
    "Name": "East Elmhurst Playground",
    "Location": "25 Ave. & 98 St.",
    "Coordinates": {
      "lat": 40.7651,
      "lng": -73.8701
    }
  },
  {
    "Id": 407,
    "Name": "Edward Hart Playground",
    "Location": "147 St. between 26 and 27 Aves.",
    "Coordinates": {
      "lat": 40.774,
      "lng": -73.8186
    }
  },
  {
    "Id": 408,
    "Name": "Ehrenreich-Austin St. Playground",
    "Location": "Austin St. between 76 Ave. & 76 Dr.",
    
    "Coordinates": {
      "lat": 40.7151,
      "lng": -73.8364
    }
  },
  {
    "Id": 409,
    "Name": "Electrichester Houses Playground Electric Playground",
    "Location": "65 Ave. & 164 St.",
    "Coordinates": {
      "lat": 40.7363,
      "lng": -73.8051
    }
  },
  {
    "Id": 410,
    "Name": "Emerald Playground PS 200",
    "Location": "71 Ave. & 164 St.",
    "Coordinates": {
      "lat": 40.7314,
      "lng": -73.8059
    }
  },
  {
    "Id": 411,
    "Name": "Equity Park",
    "Location": "88 Ave. & 91 St.",
    
    "Coordinates": {
      "lat": 40.6914,
      "lng": -73.8533
    }
  },
  {
    "Id": 412,
    "Name": "Evergreen Park",
    "Location": "St. Felix Ave. and Seneca Ave.",
    "Coordinates": {
      "lat": 40.697,
      "lng": -73.897
    }
  },
  {
    "Id": 413,
    "Name": "Farm Playground PS 26",
    "Location": "73 Ave. & 196 St.",
    
    "Coordinates": {
      "lat": 40.7352,
      "lng": -73.7774
    }
  },
  {
    "Id": 414,
    "Name": "Fitzgerald Playground",
    "Location": "Atlantic Ave. & 94 Ave.",
    "Coordinates": {
      "lat": 40.6901,
      "lng": -73.8399
    }
  },
  {
    "Id": 415,
    "Name": "Flushing Fields",
    "Location": "Bayside Ave., 25 Ave. and 149 to 150 Sts.",
    
    "Coordinates": {
      "lat": 40.7756,
      "lng": -73.8173
    }
  },
  {
    "Id": 416,
    "Name": "Forest Park",
    "Location": "108 St., Myrtle Ave. & Park Lane South",
    "Coordinates": {
      "lat": 40.7026,
      "lng": -73.8686
    }
  },
  {
    "Id": 417,
    "Name": "Forest Park",
    "Location": "Woodhaven Blvd. & Forest Park Dr.",
    "Coordinates": {
      "lat": 40.7015,
      "lng": -73.8559
    }
  },
  {
    "Id": 418,
    "Name": "Forest Park",
    "Location": "80 St. & Myrtle Ave.",
    
    "Coordinates": {
      "lat": 40.7025,
      "lng": -73.8684
    }
  },
  {
    "Id": 419,
    "Name": "Forest Park (Sobelsohn P G)",
    "Location": "Park Lane S. & Abingdon Rd.",
    "Coordinates": {
      "lat": 40.7101,
      "lng": -73.8353
    }
  },
  {
    "Id": 420,
    "Name": "Francis Lewis Park",
    "Location": "3 Ave., 147 St. and E River",
    "Coordinates": {
      "lat": 40.7965,
      "lng": -73.8249
    }
  },
  {
    "Id": 421,
    "Name": "Francis Lewis Playground",
    "Location": "42 Ave. & Francis Lewis Blvd.",
    "Coordinates": {
      "lat": 40.7603,
      "lng": -73.7837
    }
  },
  {
    "Id": 422,
    "Name": "Frank D. O'Connor Playground",
    "Location": "78 St & Broadway",
    "Coordinates": {
      "lat": 40.7439,
      "lng": -73.8868
    }
  },
  {
    "Id": 423,
    "Name": "Frank Golden Playground",
    "Location": "136 St & 20 Ave.",
    "Coordinates": {
      "lat": 40.784,
      "lng": -73.833
    }
  },
  {
    "Id": 424,
    "Name": "Frederick B. Judge",
    "Location": "111 Ave., 134 to 135 Sts. and Lincoln Sts.",
    
    "Coordinates": {
      "lat": 40.682,
      "lng": -73.808
    }
  },
  {
    "Id": 425,
    "Name": "George U. Harvey",
    "Location": "15 to 20 Aves. and E O Whitestone Expwy.",
    
    "Coordinates": {
      "lat": 40.7821,
      "lng": -73.8239
    }
  },
  {
    "Id": 426,
    "Name": "Gorman Park",
    "Location": "30 Ave. btwn. 84 & 85 Sts.",
    "Coordinates": {
      "lat": 40.7623,
      "lng": -73.8842
    }
  },
  {
    "Id": 427,
    "Name": "Hammel Playground",
    "Location": "Beach 83 St. & Rockaway Beach Blvd.",
    
    "Coordinates": {
      "lat": 40.5881,
      "lng": -73.8091
    }
  },
  {
    "Id": 428,
    "Name": "Harold Schneiderman PS 232",
    "Location": "155 Ave. between 84 and 85 Sts.",
    
    "Coordinates": {
      "lat": 40.6651,
      "lng": -73.8502
    }
  },
  {
    "Id": 429,
    "Name": "Highland Park Lower",
    "Location": "Jamaica Ave. & Cleveland St.",
    "Coordinates": {
      "lat": 40.6838,
      "lng": -73.8869
    }
  },
  {
    "Id": 430,
    "Name": "Highland Park Upper",
    "Location": "Highland Blvd. & Heath Pl.",
    "Coordinates": {
      "lat": 40.6829,
      "lng": -73.8927
    }
  },
  {
    "Id": 431,
    "Name": "Hoffman",
    "Location": "Hoffman Dr. & Seabury St.",
    "Coordinates": {
      "lat": 40.7328,
      "lng": -73.8718
    }
  },
  {
    "Id": 432,
    "Name": "Holy Cow Playground",
    "Location": "Peck Ave. & Harding Blvd.",
    "Coordinates": {
      "lat": 40.7418,
      "lng": -73.7776
    }
  },
  {
    "Id": 433,
    "Name": "Hoover",
    "Location": "Manton St. & 83 Ave.",
    "Coordinates": {
      "lat": 40.7119,
      "lng": -73.8212
    }
  },
  {
    "Id": 434,
    "Name": "Horace Harding Playground PS 206",
    "Location": "62 Dr. between 97 Pl. & 98 St.",
    "Coordinates": {
      "lat": 40.7332,
      "lng": -73.8605
    }
  },
  {
    "Id": 435,
    "Name": "Horatio P G",
    "Location": "Horatio Pkwy. & 228th St.",
    "Coordinates": {
      "lat": 40.7588,
      "lng": -73.7544
    }
  },
  {
    "Id": 436,
    "Name": "Joe Austin",
    "Location": "164 Pl. & Grand Central Parkway",
    
    "Coordinates": {
      "lat": 40.7158,
      "lng": -73.8013
    }
  },
  {
    "Id": 437,
    "Name": "John Adams",
    "Location": "133 Ave., 101-103 Sts.",
    
    "Coordinates": {
      "lat": 40.6771,
      "lng": -73.8357
    }
  },
  {
    "Id": 438,
    "Name": "Joseph F. Mafera Park",
    "Location": "65 Pl. & Catalpa Ave. & 68 Ave.",
    
    "Coordinates": {
      "lat": 40.7062,
      "lng": -73.8912
    }
  },
  {
    "Id": 439,
    "Name": "Joseph P. Addabbo Playground",
    "Location": "North Conduit Ave. between 81 and 82 Sts.",
    "Coordinates": {
      "lat": 40.673,
      "lng": -73.854
    }
  },
  {
    "Id": 440,
    "Name": "Junction Playground",
    "Location": "96 St., 34 Ave. & Junction Blvd.",
    
    "Coordinates": {
      "lat": 40.754,
      "lng": -73.872
    }
  },
  {
    "Id": 441,
    "Name": "Juniper North Playground",
    "Location": "80 St. & Juniper Blvd. North",
    "Coordinates": {
      "lat": 40.7209,
      "lng": -73.8771
    }
  },
  {
    "Id": 442,
    "Name": "Juniper South Playground",
    "Location": "74 St. & Juniper Blvd. South",
    "Coordinates": {
      "lat": 40.7182,
      "lng": -73.8834
    }
  },
  {
    "Id": 443,
    "Name": "Kissena Corridor East",
    "Location": "Peck & Underhill Aves.",
    "Coordinates": {
      "lat": 40.7445,
      "lng": -73.7874
    }
  },
  {
    "Id": 444,
    "Name": "Kissena Park 164 St. P G",
    "Location": "164 St. opposite Lithonia Ave.",
    "Coordinates": {
      "lat": 40.7482,
      "lng": -73.8032
    }
  },
  {
    "Id": 445,
    "Name": "Lawrence St.",
    "Location": "Lawrence St., College Point Blvd. and Queens Botanical Gardens",
    "Coordinates": {
      "lat": 40.748,
      "lng": -73.834
    }
  },
  {
    "Id": 446,
    "Name": "Lefferts",
    "Location": "North Conduit Ave. and 120 to 122 Sts.",
    
    "Coordinates": {
      "lat": 40.6654,
      "lng": -73.8209
    }
  },
  {
    "Id": 447,
    "Name": "London Planetree",
    "Location": "88th St., Atlantic Ave, & 95 Ave.",
    "Coordinates": {
      "lat": 40.686,
      "lng": -73.853
    }
  },
  {
    "Id": 448,
    "Name": "Louis Armstrong Playground PS 143",
    "Location": "37 Ave. btwn. 112 & 113 Sts.",
    
    "Coordinates": {
      "lat": 40.7549,
      "lng": -73.8556
    }
  },
  {
    "Id": 449,
    "Name": "Louis Pasteur Park JHS 67",
    "Location": "248 St. & 51 Ave.",
    "Coordinates": {
      "lat": 40.762,
      "lng": -73.7352
    }
  },
  {
    "Id": 450,
    "Name": "MacNeil Park",
    "Location": "Poppenhusen Ave. and 119 St.",
    "Coordinates": {
      "lat": 40.7934,
      "lng": -73.8516
    }
  },
  {
    "Id": 451,
    "Name": "Maple Playground",
    "Location": "Maple Ave. & Kissena Blvd.",
    "Coordinates": {
      "lat": 40.7556,
      "lng": -73.8261
    }
  },
  {
    "Id": 452,
    "Name": "Marie Curie Park",
    "Location": "211 St. & 47 Ave.",
    "Coordinates": {
      "lat": 40.757,
      "lng": -73.7712
    }
  },
  {
    "Id": 453,
    "Name": "Newtown Playground",
    "Location": "92 St. & 56 Ave.",
    "Coordinates": {
      "lat": 40.7363,
      "lng": -73.8695
    }
  },
  {
    "Id": 454,
    "Name": "Northern Playground",
    "Location": "Northern BLvd. & 90th St.",
    "Coordinates": {
      "lat": 40.756,
      "lng": -73.8744
    }
  },
  {
    "Id": 455,
    "Name": "Oakland Gardens Playground PS 203",
    "Location": "54 Ave. & Springfield Blvd.",
    "Coordinates": {
      "lat": 40.7536,
      "lng": -73.7598
    }
  },
  {
    "Id": 456,
    "Name": "P.O. Edward Byrne Park",
    "Location": "North Conduit Ave., 134 to 135 Sts. and 135 Ave.",
    
    "Coordinates": {
      "lat": 40.6673,
      "lng": -73.8076
    }
  },
  {
    "Id": 457,
    "Name": "P.O. Nicholas DeMutis Park",
    "Location": "Liberty Ave. and 101 to 102 Sts.",
    "Coordinates": {
      "lat": 40.6818,
      "lng": -73.8392
    }
  },
  {
    "Id": 458,
    "Name": "Park of the Americas",
    "Location": "104 St. & 41 Ave.",
    "Coordinates": {
      "lat": 40.7487,
      "lng": -73.8614
    }
  },
  {
    "Id": 459,
    "Name": "Playground 21",
    "Location": "163 to 166 Sts., 21 Ave. and 21 Rd.",
    "Coordinates": {
      "lat": 40.7781,
      "lng": -73.7984
    }
  },
  {
    "Id": 460,
    "Name": "Playground 62 PS 220",
    "Location": "Yellowstone Blvd. between 62 Ave. & 62 Rd.",
    "Coordinates": {
      "lat": 40.736,
      "lng": -73.8536
    }
  },
  {
    "Id": 461,
    "Name": "Playground 75 PS 154",
    "Location": "75 Ave. & 160 St.",
    "Coordinates": {
      "lat": 40.7264,
      "lng": -73.8081
    }
  },
  {
    "Id": 462,
    "Name": "Playground Ninety",
    "Location": "Northern Blvd. & 90 St.",
    
    "Coordinates": {
      "lat": 40.757,
      "lng": -73.8785
    }
  },
  {
    "Id": 463,
    "Name": "Pomonok",
    "Location": "65 Ave. & Kissena Blvd.",
    "Coordinates": {
      "lat": 40.7357,
      "lng": -73.8141
    }
  },
  {
    "Id": 464,
    "Name": "Poppenhusen Playground",
    "Location": "20 Ave btwn 123rd & 124th Sts",
    "Coordinates": {
      "lat": 40.781,
      "lng": -73.8444
    }
  },
  {
    "Id": 465,
    "Name": "PS 46",
    "Location": "64 Ave. & 218 St.",
    "Coordinates": {
      "lat": 40.7558,
      "lng": -73.7646
    }
  },
  {
    "Id": 466,
    "Name": "Queens Valley Playground",
    "Location": "137 St. & 77 Ave.",
    "Coordinates": {
      "lat": 40.7219,
      "lng": -73.8237
    }
  },
  {
    "Id": 467,
    "Name": "Rachel Carlson Park",
    "Location": "Colden St. & Juniper Ave.",
    "Coordinates": {
      "lat": 40.7489,
      "lng": -73.8222
    }
  },
  {
    "Id": 468,
    "Name": "Raymond M. O'Connor Field",
    "Location": "33 Ave. & 210 St.",
    "Coordinates": {
      "lat": 40.7717,
      "lng": -73.7798
    }
  },
  {
    "Id": 469,
    "Name": "Real Good Park",
    "Location": "Long Island Expressway, 99 St. & 62 Ave.",
    "Coordinates": {
      "lat": 40.7359,
      "lng": -73.8568
    }
  },
  {
    "Id": 470,
    "Name": "Redfern Playground",
    "Location": "Redfern Ave & Beach 12 St.",
    "Coordinates": {
      "lat": 40.6113,
      "lng": -73.7491
    }
  },
  {
    "Id": 471,
    "Name": "Rockaway Beach",
    "Location": "Beach 82 & Shore Front Pkwy.",
    
    "Coordinates": {
      "lat": 40.586,
      "lng": -73.8071
    }
  },
  {
    "Id": 472,
    "Name": "Rockaway Community Playground",
    "Location": "Almeda Avenue",
    "Coordinates": {
      "lat": 40.5983,
      "lng": -73.7837
    }
  },
  {
    "Id": 473,
    "Name": "Rocket Park JHS 202",
    "Location": "North Conduit Ave., Arion Rd. and 149 Ave.",
    "Coordinates": {
      "lat": 40.6706,
      "lng": -73.8462
    }
  },
  {
    "Id": 474,
    "Name": "Russell Sage Playground",
    "Location": "68 Ave. & Booth to Austin sts",
    "Coordinates": {
      "lat": 40.7236,
      "lng": -73.8518
    }
  },
  {
    "Id": 475,
    "Name": "Seaside Playground",
    "Location": "Rockaway Beach Blvd. & B109-110 Sts.",
    "Coordinates": {
      "lat": 40.5809,
      "lng": -73.8308
    }
  },
  {
    "Id": 476,
    "Name": "Seven Gables Playground",
    "Location": "210 St. & Oceania St.",
    "Coordinates": {
      "lat": 40.7441,
      "lng": -73.7664
    }
  },
  {
    "Id": 477,
    "Name": "Seven Seas Sports Courts Four Winds P G",
    "Location": "Booth Memorial Blvd. & 160 St.",
    "Coordinates": {
      "lat": 40.7424,
      "lng": -73.8079
    }
  },
  {
    "Id": 478,
    "Name": "Silent Springs Playground",
    "Location": "Colden St. & Geranium Ave.",
    "Coordinates": {
      "lat": 40.7502,
      "lng": -73.8233
    }
  },
  {
    "Id": 479,
    "Name": "Smokey Oval Playground",
    "Location": "Atlantic, 95 Ave., and 125 St.",
    
    "Coordinates": {
      "lat": 40.6943,
      "lng": -73.8208
    }
  },
  {
    "Id": 480,
    "Name": "Travers Park",
    "Location": "78 St, , S O Northern Blvd.",
    
    "Coordinates": {
      "lat": 40.754,
      "lng": -73.8894
    }
  },
  {
    "Id": 481,
    "Name": "Triassic Playground",
    "Location": "Jewel Ave. & Van Wyck Expressway",
    
    "Coordinates": {
      "lat": 40.729,
      "lng": -73.835
    }
  },
  {
    "Id": 482,
    "Name": "Utopia",
    "Location": "Utopia Pkwy. & Jewel Ave.",
    
    "Coordinates": {
      "lat": 40.7305,
      "lng": -73.7932
    }
  },
  {
    "Id": 483,
    "Name": "Vleigh Place Playground PS 165",
    "Location": "Union Turnpike & 141 St.",
    "Coordinates": {
      "lat": 40.7185,
      "lng": -73.8204
    }
  },
  {
    "Id": 484,
    "Name": "Walter Ward Playground PS 207",
    "Location": "89 St. & 160 Ave.",
    "Coordinates": {
      "lat": 40.6578,
      "lng": -73.8438
    }
  },
  {
    "Id": 485,
    "Name": "Whitestone Playground PS 193",
    "Location": "152 St. between 11 and 12 Aves.",
    "Coordinates": {
      "lat": 40.7922,
      "lng": -73.8082
    }
  },
  {
    "Id": 486,
    "Name": "Willets Pt. Playground PS 209",
    "Location": "165 St. btwn. 16 Ave & 16 Rd.",
    "Coordinates": {
      "lat": 40.7836,
      "lng": -73.7962
    }
  },
  {
    "Id": 487,
    "Name": "Willow Lake Playground",
    "Location": "Grand Central Pkwy between 71 & 72 Aves.",
    "Coordinates": {
      "lat": 40.723,
      "lng": -73.8372
    }
  },
  {
    "Id": 488,
    "Name": "World&rsquo;s Fair Playground",
    "Location": "62 Dr. and Grand Central Pkwy.",
    "Coordinates": {
      "lat": 40.7374,
      "lng": -73.8456
    }
  },
  {
    "Id": 489,
    "Name": "Yellowstone Municipal Park",
    "Location": "Yellowstone Blvd. between 68 Ave. & 68 Rd.",
    "Coordinates": {
      "lat": 40.7264,
      "lng": -73.8478
    }
  },
  {
    "Id": 490,
    "Name": "Abraham Levy Memorial Park",
    "Location": "Jewett & Castleton Ave.",
    "Coordinates": {
      "lat": 40.634,
      "lng": -74.1287
    }
  },
  {
    "Id": 491,
    "Name": "Arrochar Playground (PS 39)",
    "Location": "Sand Lane & McFarland Ave.",
    "Coordinates": {
      "lat": 40.5978,
      "lng": -74.0706
    }
  },
  {
    "Id": 492,
    "Name": "Austin J McDonald Playground",
    "Location": "Forest & Myrtle Aves.",
    "Coordinates": {
      "lat": 40.6297,
      "lng": -74.1151
    }
  },
  {
    "Id": 493,
    "Name": "Clawson Playground (PS 50)",
    "Location": "Adelaide Ave. & Clawson Rd.",
    "Coordinates": {
      "lat": 40.5603,
      "lng": -74.1239
    }
  },
  {
    "Id": 494,
    "Name": "Clove Lakes Park",
    "Location": "Slosson Ave, Victory Blvd. and Clove Rd.",
    "Coordinates": {
      "lat": 40.616,
      "lng": -74.1054
    }
  },
  {
    "Id": 495,
    "Name": "Davis Playground (PS 31)",
    "Location": "Layton & Bismark Ave.",
    "Coordinates": {
      "lat": 40.6421,
      "lng": -74.0859
    }
  },
  {
    "Id": 496,
    "Name": "Dongan Playground (PS 52)",
    "Location": "Mason, Buel & Dongan Hill Aves.",
    "Coordinates": {
      "lat": 40.582,
      "lng": -74.089
    }
  },
  {
    "Id": 497,
    "Name": "Lieutenant John H. Martinson Playground",
    "Location": "Osborne St. & Preston Ave.",
    "Coordinates": {
      "lat": 40.5365,
      "lng": -74.1628
    }
  },
  {
    "Id": 498,
    "Name": "Faber Park",
    "Location": "Richmond Terrace & Faber St.",
    "Coordinates": {
      "lat": 40.6409,
      "lng": -74.1358
    }
  },
  {
    "Id": 499,
    "Name": "FDR Boardwalk & Beach",
    "Location": "Miller Field & Greely Ave.",
    "Coordinates": {
      "lat": 40.5687,
      "lng": -74.0912
    }
  },
  {
    "Id": 500,
    "Name": "Cesar Sanchez Basketball Courts",
    "Location": "Dongan Hills Ave. & SIRR",
    "Coordinates": {
      "lat": 40.5863,
      "lng": -74.1006
    }
  },
  {
    "Id": 501,
    "Name": "Gerard P Dugan Playground",
    "Location": "Mill Rd., Weed Ave., and Tysens Lane",
    "Coordinates": {
      "lat": 40.5608,
      "lng": -74.1102
    }
  },
  {
    "Id": 502,
    "Name": "The Big Park",
    "Location": "Grandview Ave. & Continental Pl.",
    "Coordinates": {
      "lat": 40.6312,
      "lng": -74.1651
    }
  },
  {
    "Id": 503,
    "Name": "Great Kills Park (PS 8)",
    "Location": "Hillcrest Ave. & Highmount Rd.",
    "Coordinates": {
      "lat": 40.5471,
      "lng": -74.1518
    }
  },
  {
    "Id": 504,
    "Name": "Greencroft Playground (PS 53)",
    "Location": "Redgrave, Greencroft St., Ainsworth Ave., and Durant Ave.",
    "Coordinates": {
      "lat": 40.552,
      "lng": -74.1368
    }
  },
  {
    "Id": 505,
    "Name": "Harbor Playground",
    "Location": "Harbor Rd. & Richmond Terrace",
    "Coordinates": {
      "lat": 40.6366,
      "lng": -74.1604
    }
  },
  {
    "Id": 506,
    "Name": "Ikefugi Playground",
    "Location": "Winter & Bismark Aves.",
    "Coordinates": {
      "lat": 40.6387,
      "lng": -74.0837
    }
  },
  {
    "Id": 507,
    "Name": "Jennifer's Playground",
    "Location": "Jules Dr., Elson Ct., and Regis Dr.",
    "Coordinates": {
      "lat": 40.62,
      "lng": -74.1635
    }
  },
  {
    "Id": 508,
    "Name": "Luis Lopez Playground",
    "Location": "Targee St., Palma Dr., and Oder Ave.",
    "Coordinates": {
      "lat": 40.6118,
      "lng": -74.0849
    }
  },
  {
    "Id": 509,
    "Name": "Markham Playground",
    "Location": "Willowbrook Pkwy., Forest Ave. and Houston St.",
    "Coordinates": {
      "lat": 40.6237,
      "lng": -74.1456
    }
  },
  {
    "Id": 510,
    "Name": "Michael J Mahoney Memorial Playground.",
    "Location": "Beechwood Ave., Crescent St. and Cleveland St.",
    "Coordinates": {
      "lat": 40.643,
      "lng": -74.086
    }
  },
  {
    "Id": 511,
    "Name": "Midland Field (JHS 2)",
    "Location": "Midland, Mason, and Bedford Aves.",
    "Coordinates": {
      "lat": 40.577,
      "lng": -74.0995
    }
  },
  {
    "Id": 512,
    "Name": "Naples Playground (PS 48)",
    "Location": "Targee St. & Naples St.",
    "Coordinates": {
      "lat": 40.6027,
      "lng": -74.0907
    }
  },
  {
    "Id": 513,
    "Name": "Nicholas De Matti Playground",
    "Location": "Tompkins Ave. & Chestnut St.",
    "Coordinates": {
      "lat": 40.6145,
      "lng": -74.0742
    }
  },
  {
    "Id": 514,
    "Name": "Old Town Playground",
    "Location": "Parkinson Ave. & Kramer St.",
    "Coordinates": {
      "lat": 40.5954,
      "lng": -74.0814
    }
  },
  {
    "Id": 515,
    "Name": "Park",
    "Location": "Richmond Pkwy & Vernon Blvd.",
    "Coordinates": {
      "lat": 40.533,
      "lng": -74.2021
    }
  },
  {
    "Id": 516,
    "Name": "Prall Playground (IS 27)",
    "Location": "Elizabeth St. & Forest Ave.",
    "Coordinates": {
      "lat": 40.6288,
      "lng": -74.1183
    }
  },
  {
    "Id": 517,
    "Name": "PS 14 & Stapleton Houses Plgd.",
    "Location": "Tompkins Ave, Broad, and Hill Sts.",
    "Coordinates": {
      "lat": 40.6229,
      "lng": -74.0796
    }
  },
  {
    "Id": 518,
    "Name": "Randolph Walker Park",
    "Location": "Delafield Pl, Bard and Davis Aves.",
    "Coordinates": {
      "lat": 40.6431,
      "lng": -74.1103
    }
  },
  {
    "Id": 519,
    "Name": "Reinhard E. Kaltenmeier Playground",
    "Location": "Virginia Ave. & Anderson St.",
    "Coordinates": {
      "lat": 40.6146,
      "lng": -74.0682
    }
  },
  {
    "Id": 520,
    "Name": "Schmul Park",
    "Location": "Wild Ave & Pearson St.",
    "Coordinates": {
      "lat": 40.589,
      "lng": -74.188
    }
  },
  {
    "Id": 521,
    "Name": "Silver Lake Park",
    "Location": "University Pl. & Revere St.",
    "Coordinates": {
      "lat": 40.6284,
      "lng": -74.0987
    }
  },
  {
    "Id": 522,
    "Name": "Terrace PS 35 Playground",
    "Location": "Foote Ave., Howard Ave., and Martha St.",
    "Coordinates": {
      "lat": 40.6136,
      "lng": -74.0986
    }
  },
  {
    "Id": 523,
    "Name": "Christopher J. Igneri Playground",
    "Location": "Schmidts Lane & Manor Rd.",
    "Coordinates": {
      "lat": 40.6087,
      "lng": -74.1191
    }
  },
  {
    "Id": 524,
    "Name": "Roy Wilkins Recreation Center",
    "Location": "177th Street & Baisley Boulevard",
    "Coordinates": {
      "lat": 40.6862,
      "lng": -73.7698
    }
  },
  {
    "Id": 525,
    "Name": "Chelsea Recreation Center",
    "Location": "West 25 Street and 10 Avenue",
    "Coordinates": {
      "lat": 40.7483,
      "lng": -74.0022
    }
  },
  {
    "Id": 526,
    "Name": "West Bronx Recreation Center",
    "Location": "West 172 Street between Nelson Avenue & Jesup Street",
    "Coordinates": {
      "lat": 40.844,
      "lng": -73.9195
    }
  },
  {
    "Id": 527,
    "Name": "Thomas Greene Playground",
    "Location": "Third Avenue at Douglass Street",
    "Coordinates": {
      "lat": 40.6804,
      "lng": -73.9852
    }
  },
  {
    "Id": 528,
    "Name": "Daniel M. O'Connell Playground",
    "Location": "197 St., 196 St. Bet. 113 Ave. And Murdock Ave.",
    "Coordinates": {
      "lat": 40.699,
      "lng": -73.758
    }
  },
  {
    "Id": 529,
    "Name": "157th St. Playground",
    "Location": "157th Street & 116th. Avenue",
    "Coordinates": {
      "lat": 40.6846,
      "lng": -73.7868
    }
  },
  {
    "Id": 530,
    "Name": "Grand Playground",
    "Location": "W. 181 St. between Grand Ave. and Davidson St.",
    "Coordinates": {
      "lat": 40.8561,
      "lng": -73.9072
    }
  },
  {
    "Id": 531,
    "Name": "The Field of Dreams",
    "Location": "E. 167 St between Southern Blvd. and Simpson St.",
    "Coordinates": {
      "lat": 40.8266,
      "lng": -73.8923
    }
  },
  {
    "Id": 532,
    "Name": "Grant Park",
    "Location": "Grant Avenue between E. 169 and E. 170 Streets",
    "Coordinates": {
      "lat": 40.8364,
      "lng": -73.9136
    }
  },
  {
    "Id": 533,
    "Name": "Half-Nelson Playground",
    "Location": "Nelson Av bet. Featherbed La and W 174 St",
    "Coordinates": {
      "lat": 40.8469,
      "lng": -73.9191
    }
  },
  {
    "Id": 534,
    "Name": "Hunts Point Playground",
    "Location": "Spofford Av bet. Faile St and Hunts Point Av",
    "Coordinates": {
      "lat": 40.814,
      "lng": -73.8861
    }
  },
  {
    "Id": 535,
    "Name": "Julio Carballo Fields",
    "Location": "Lafayette Avenue and Barretto Street",
    "Coordinates": {
      "lat": 40.8162,
      "lng": -73.8896
    }
  },
  {
    "Id": 536,
    "Name": "Washington Market Park",
    "Location": "Chambers St. between Greenwich St. and West St.",
    "Coordinates": {
      "lat": 40.717,
      "lng": -74.012
    }
  },
  {
    "Id": 537,
    "Name": "Lillian D Wald Playground",
    "Location": "Cherry St, Montgomery St and Gouverneur St",
    "Coordinates": {
      "lat": 40.7121,
      "lng": -73.9842
    }
  },
  {
    "Id": 538,
    "Name": "Windmuller Park",
    "Location": "52 St., Woodside Ave. bet. 39 Rd. and 39 Dr.",
    
    "Coordinates": {
      "lat": 40.7476,
      "lng": -73.9114
    }
  },
  {
    "Id": 539,
    "Name": "Brooklyn Bridge Park",
    "Location": "Pier 2",
    "Coordinates": {
      "lat": 40.6992,
      "lng": -73.9983
    }
  },
  {
    "Id": 540,
    "Name": "Woodtree Playground",
    "Location": "20th Avenue Between 37th & 38th Sts.",
    "Coordinates": {
      "lat": 40.7772,
      "lng": -73.9031
    }
  },
  {
    "Id": 541,
    "Name": "Christopher \"Biggie\" Wallace Courts",
    "Location": "Fulton Street & Classon Avenue",
    "Coordinates": {
      "lat": 40.6817,
      "lng": -73.9595
    }
  },
  {
    "Id": 542,
    "Name": "Green Grass Courts",
    "Location": "Marcy Ave & Hope St",
    "Coordinates": {
      "lat": 40.7133,
      "lng": -73.9546
    }
  },
  {
    "Id": 543,
    "Name": "Justice Gilbert Ramirez Park",
    "Location": "McKibbin St. bet. White St. and Bogart St.",
    "Coordinates": {
      "lat": 40.706,
      "lng": -73.9343
    }
  },
  {
    "Id": 544,
    "Name": "Bridge and Tunnel Park",
    "Location": "Tunnel Plaza, 50 Ave, 11 St",
    "Coordinates": {
      "lat": 40.7419,
      "lng": -73.9515
    }
  },
  {
    "Id": 545,
    "Name": "Ogden Plimpton Playground",
    "Location": "Plimpton Ave. & West 170th St.",
    "Coordinates": {
      "lat": 40.8419,
      "lng": -73.9239
    }
  },
  {
    "Id": 546,
    "Name": "Othmar Ammann Playground",
    "Location": "East 124th St. & 1st Ave.",
    "Coordinates": {
      "lat": 40.8015,
      "lng": -73.9322
    }
  },
  {
    "Id": 547,
    "Name": "Bushwick Playground",
    "Location": "Knickerbocker Avenue & Putnam Avenue",
    "Coordinates": {
      "lat": 40.6957,
      "lng": -73.9118
    }
  },
  {
    "Id": 548,
    "Name": "Triborough Bridge Playground C",
    "Location": "23rd St & Hoyt Ave",
    "Coordinates": {
      "lat": 40.774,
      "lng": -73.9225
    }
  },
  {
    "Id": 549,
    "Name": "Murray Playground",
    "Location": "11th Street between 45th Avenue & 45th Road",
    "Coordinates": {
      "lat": 40.7476,
      "lng": -73.9496
    }
  },
  {
    "Id": 550,
    "Name": "West 186th Street Basketball Courts",
    "Location": "West 186th St. between Audubon Ave. & St. Nicholas Ave.",
    "Coordinates": {
      "lat": 40.8521,
      "lng": -73.9308
    }
  },
  {
    "Id": 551,
    "Name": "Starlight Park",
    "Location": "Sheridan Expressway & E. 174th St.",
    "Coordinates": {
      "lat": 40.8339,
      "lng": -73.8819
    }
  }
]

export default courts