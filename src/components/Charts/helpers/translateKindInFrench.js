const translateKindInFrench = (kind) => {
    if (!kind) return "Élement non trouvé"
    switch (kind.toLowerCase()) {
        case 'cardio':
            return 'Cardio'
        case 'energy':
            return 'Energie'
        case 'endurance':
            return 'Endurance'
        case 'strength':
            return 'Force'
        case 'speed':
            return 'Vitesse'
        case 'intensity':
            return 'Intensité'
        default:
            return "Élement non trouvé"
    }
}

export default translateKindInFrench