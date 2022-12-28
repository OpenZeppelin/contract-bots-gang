
export function condensateResults(
    results: {
        status: boolean, 
        type: string, 
        fmatches: {text: string, hex: string, confidence: number}[] | null, 
        ematches: {text: string, hex: string, confidence: number}[] | null,
        extra: object
    }[]
) {
    var interfaces: {type: string, fmatches: object[], ematches: object[], extra: object}[] = [];
    
    // Filter out interfaces that don't match
    results.forEach(result => {
        if(result.status) interfaces.push({
            type: result.type, 
            fmatches: result.fmatches ? result.fmatches : [], 
            ematches: result.ematches ? result.ematches : [],
            extra: result.extra
        });
    })

    // Consolidate
    var types: string[] = [];
    var fmatches: object[] = [];
    var ematches: object[] = [];
    var extras = {};
    interfaces.forEach(element => {
        types.push(element.type);
        fmatches = fmatches.concat(element.fmatches);
        ematches = ematches.concat(element.ematches);
        extras = { ...element.extra }
    })

    return {
        types,
        fmatches,
        ematches,
        extras
    }
}

export function parseData(events: any[], functions: any[]) {
    var o: any = {};
    for (const f of functions) (o[f.hex] ??= []).push(f.text);
    const functionsGroupedByHex = Object.entries(o).map(([hex, texts]) => ({ hex, texts }))
    o = {};
    for (const e of events) (o[e.hex] ??= []).push(e.text);
    const eventsGroupedByHex = Object.entries(o).map(([hex, texts]) => ({ hex, texts }))
    return {eventsGroupedByHex, functionsGroupedByHex}
}