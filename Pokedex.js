function type(pokemons)	{
    var type = pokemons.type[0];
    var color = {Grass: "#008000", Poison: "#800080", Fire: "#840000", Water: "#000084", 
                Combat: "#C42301", Dragon: "#AC04B4", Elek: "#F2EF0B", Ice: "#0BEFF2", Insect: "#2CCE04", Normal: "#B2B2B2", Psy: "#EE009B", Rock: "#A87303", 
                Ground: "#E49C03", Spectre: "#8F03E4", Fly: "#04C9E1"}

    if (type === "Combat")
            return '<span style="background-color: '+color.Combat+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Combat </span>';
    if (type === "Dragon")
            return '<span style="background-color: '+color.Dragon+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Dragon </span>';
    if (type === "Water")
            return '<span style="background-color: '+color.Water+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Water </span>';
    if (type === "Elek")
            return '<span style="background-color: '+color.Elek+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Elek </span>';
    if (type === "Fire")
            return '<span style="background-color: '+color.Fire+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Fire </span>';
    if (type === "Ice")
            return '<span style="background-color: '+color.Ice+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Ice </span>';										
    if (type === "Insect")
            return '<span style="background-color: '+color.Insect+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Insect </span>';
    if (type === "Normal")
            return '<span style="background-color: '+color.Normal+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Normal </span>';
    if (type === "Grass")
            return '<span style="background-color: '+color.Grass+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Grass </span>';
    if (type === "Poison")
            return '<span style="background-color: '+color.Poison+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Poison </span>';
    if (type === "Psy")
            return '<span style="background-color: '+color.Psy+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Psy </span>';
    if (type === "Rock")
            return '<span style="background-color: '+color.Rock+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Rock </span>';
    if (type === "Ground")
            return '<span style="background-color: '+color.Ground+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Ground </span>';
    if (type === "Spectre")
            return '<span style="background-color: '+color.Spectre+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Spectre </span>';
    if (type === "Fly")
            return '<span style="background-color: '+color.Fly+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Fly </span>';
}

function type2(pokemons) {
    var type = pokemons.type[1];
    var color = {Grass: "#008000", Poison: "#800080", Fire: "#840000", Water: "#000084", 
        Combat: "#C42301", Dragon: "#AC04B4", Elek: "#F2EF0B", Ice: "#0BEFF2", Insect: "#2CCE04", Normal: "#B2B2B2", Psy: "#EE009B", Rock: "#A87303", 
        Ground: "#E49C03", Spectre: "#8F03E4", Fly: "#04C9E1"}

    if (type === "Combat")
        return '<span style="background-color: '+color.Combat+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Combat </span>';
    if (type === "Dragon")
        return '<span style="background-color: '+color.Dragon+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Dragon </span>';
    if (type === "Water")
        return '<span style="background-color: '+color.Water+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Water </span>';
    if (type === "Elek")
        return '<span style="background-color: '+color.Elek+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Elek </span>';
    if (type === "Fire")
        return '<span style="background-color: '+color.Fire+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Fire </span>';
    if (type === "Ice")
        return '<span style="background-color: '+color.Ice+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Ice </span>';										
    if (type === "Insect")
        return '<span style="background-color: '+color.Insect+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Insect </span>';
    if (type === "Normal")
        return '<span style="background-color: '+color.Normal+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Normal </span>';
    if (type === "Grass")
        return '<span style="background-color: '+color.Grass+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Grass </span>';
    if (type === "Poison")
        return '<span style="background-color: '+color.Poison+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Poison </span>';
    if (type === "Psy")
        return '<span style="background-color: '+color.Psy+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Psy </span>';
    if (type === "Rock")
        return '<span style="background-color: '+color.Rock+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Rock </span>';
    if (type === "Ground")
        return '<span style="background-color: '+color.Ground+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Ground </span>';
    if (type === "Spectre")
        return '<span style="background-color: '+color.Spectre+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Spectre </span>';
    if (type === "Fly")
        return '<span style="background-color: '+color.Fly+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Fly </span>';
}

function weak(pokemons) {
    var type = pokemons.weaknesses[0];
    var color = {Grass: "#008000", Poison: "#800080", Fire: "#840000", Water: "#000084", 
                Combat: "#C42301", Dragon: "#AC04B4", Elek: "#F2EF0B", Ice: "#0BEFF2", Insect: "#2CCE04", Normal: "#B2B2B2", Psy: "#EE009B", Rock: "#A87303", 
                Ground: "#E49C03", Spectre: "#8F03E4", Fly: "#04C9E1"}

    if (type === "Combat")
            return '<span style="background-color: '+color.Combat+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Combat </span>';
    if (type === "Dragon")
            return '<span style="background-color: '+color.Dragon+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Dragon </span>';
    if (type === "Water")
            return '<span style="background-color: '+color.Water+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Water </span>';
    if (type === "Elek")
            return '<span style="background-color: '+color.Elek+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Elek </span>';
    if (type === "Fire")
            return '<span style="background-color: '+color.Fire+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Fire </span>';
    if (type === "Ice")
            return '<span style="background-color: '+color.Ice+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Ice </span>';										
    if (type === "Insect")
            return '<span style="background-color: '+color.Insect+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Insect </span>';
    if (type === "Normal")
            return '<span style="background-color: '+color.Normal+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Normal </span>';
    if (type === "Grass")
            return '<span style="background-color: '+color.Grass+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Grass </span>';
    if (type === "Poison")
            return '<span style="background-color: '+color.Poison+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Poison </span>';
    if (type === "Psy")
            return '<span style="background-color: '+color.Psy+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Psy </span>';
    if (type === "Rock")
            return '<span style="background-color: '+color.Rock+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Rock </span>';
    if (type === "Ground")
            return '<span style="background-color: '+color.Ground+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Ground </span>';
    if (type === "Spectre")
            return '<span style="background-color: '+color.Spectre+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Spectre </span>';
    if (type === "Fly")
            return '<span style="background-color: '+color.Fly+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Fly </span>';
}

function weak2(pokemons) {
    var type = pokemons.weaknesses[1];
    var color = {Grass: "#008000", Poison: "#800080", Fire: "#840000", Water: "#000084", 
                Combat: "#C42301", Dragon: "#AC04B4", Elek: "#F2EF0B", Ice: "#0BEFF2", Insect: "#2CCE04", Normal: "#B2B2B2", Psy: "#EE009B", Rock: "#A87303", 
                Ground: "#E49C03", Spectre: "#8F03E4", Fly: "#04C9E1"}

    if (type === "Combat")
            return '<span style="background-color: '+color.Combat+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Combat </span>';
    if (type === "Dragon")
            return '<span style="background-color: '+color.Dragon+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Dragon </span>';
    if (type === "Water")
            return '<span style="background-color: '+color.Water+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Water </span>';
    if (type === "Elek")
            return '<span style="background-color: '+color.Elek+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Elek </span>';
    if (type === "Fire")
            return '<span style="background-color: '+color.Fire+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Fire </span>';
    if (type === "Ice")
            return '<span style="background-color: '+color.Ice+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Ice </span>';										
    if (type === "Insect")
            return '<span style="background-color: '+color.Insect+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Insect </span>';
    if (type === "Normal")
            return '<span style="background-color: '+color.Normal+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Normal </span>';
    if (type === "Grass")
            return '<span style="background-color: '+color.Grass+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Grass </span>';
    if (type === "Poison")
            return '<span style="background-color: '+color.Poison+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Poison </span>';
    if (type === "Psy")
            return '<span style="background-color: '+color.Psy+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Psy </span>';
    if (type === "Rock")
            return '<span style="background-color: '+color.Rock+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Rock </span>';
    if (type === "Ground")
            return '<span style="background-color: '+color.Ground+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Ground </span>';
    if (type === "Spectre")
            return '<span style="background-color: '+color.Spectre+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Spectre </span>';
    if (type === "Fly")
            return '<span style="background-color: '+color.Fly+'; width: 60px; height: 20px; text-align: center; color: white; border-radius: 6px; font-size: 10px"> Fly </span>';
}