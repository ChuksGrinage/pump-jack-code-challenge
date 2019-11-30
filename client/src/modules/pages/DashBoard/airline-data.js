const data = [{
    "airlineData": {
        "dateRange": {
            "preset": "last90",
            "start": "2019-08-31",
            "end": "2019-11-29"
        },
        "summary": {
            "revenue": 150000000,
            "passengers": 600000,
            "onTimePerformance": 0.922375
        },
        "routes": {
            "routePairs": 20,
            "revenuePerRoutePair": 7500000,
            "revenuePerFlight": 37500,
            "highestYield": [
                {
                    "from": "Las Vegas",
                    "to": "New York—Kennedy",
                    "type": "789",
                    "roundTripsPerWeek": "7",
                    "yield": 0.991
                },
                {
                    "from": "New York—Kennedy",
                    "to": "Los Angeles",
                    "type": "789",
                    "roundTripsPerWeek": "7",
                    "yield": 0.984
                },
                {
                    "from": "Las Vegas",
                    "to": "Hollywood Burbank",
                    "type": "221",
                    "roundTripsPerWeek": "15",
                    "yield": 0.983
                },
                {
                    "from": "Las Vegas",
                    "to": "San Jose",
                    "type": "223",
                    "roundTripsPerWeek": "12",
                    "yield": 0.981
                },
                {
                    "from": "New York—Kennedy",
                    "to": "Miami",
                    "type": "789",
                    "roundTripsPerWeek": "5",
                    "yield": 0.976
                }
            ],
            "lowestYield": [
                {
                    "from": "New York—Kennedy",
                    "to": "London—Heathrow",
                    "type": "789",
                    "roundTripsPerWeek": "4",
                    "yield": 0.422
                },
                {
                    "from": "Las Vegas",
                    "to": "London—Heathrow",
                    "type": "789",
                    "roundTripsPerWeek": "5",
                    "yield": 0.449
                },
                {
                    "from": "Las Vegas",
                    "to": "Dallas—DFW",
                    "type": "223",
                    "roundTripsPerWeek": "7",
                    "yield": 0.470
                },
                {
                    "from": "Las Vegas",
                    "to": "Sacramento",
                    "type": "223",
                    "roundTripsPerWeek": "5",
                    "yield": 0.496
                },
                {
                    "from": "New York—Kennedy",
                    "to": "Chicago—O'Hare",
                    "type": "789",
                    "roundTripsPerWeek": "4",
                    "yield": 0.573
                }
            ]
        },
        "cabins": [
            {
                "cabinName": "Main Cabin",
                "fareCodes": [
                    "t", "u", "v", "x", "y"
                ],
                "revenue": 62550000,
                "pctOfYield": 0.9
            },
            {
                "cabinName": "Stretch",
                "fareCodes": [
                    "w"
                ],
                "revenue": 29400000,
                "pctOfYield": 0.9
            },
            {
                "cabinName": "Escape NAmer",
                "fareCodes": [
                    "t", "u", "v", "x", "y"
                ],
                "revenue": 27000000,
                "pctOfYield": 0.9
            },
            {
                "cabinName": "Escape Intl",
                "fareCodes": [
                    "t", "u", "v", "x", "y"
                ],
                "revenue": 24750000,
                "pctOfYield": 0.9
            }
        ]
    }
}]

export default data;