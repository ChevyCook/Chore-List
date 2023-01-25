import json
  


with open("team.json", "r") as jsonFile:
    data = json.load(jsonFile)

    for each in data:
        if  each["team"] == "B":
            each["id"] += 1
            if each["id"] == 6:
                each["id"] = 1

            print(each["team"])

with open("team.json", "w") as jsonFile:
    json.dump(data, jsonFile)