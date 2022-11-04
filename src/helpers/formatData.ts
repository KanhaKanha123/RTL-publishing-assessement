//format data, just keep neccessary fields from big object
export const formatData = (articleRawData: any) => {
    try {
        const neccessaryDataMaped = articleRawData.bundelItems.map((item: any) => ({
            afbeelding: item.afbeelding.afbeelding,
            urlAlias: item.urlAlias,
            labelValue: item.labelValue,
            title: item.title,
            lead: item.lead,
            formatted: item.aangemaaktDatum.formatted
        }));

        return {
            title: articleRawData.title,
            label: articleRawData.label,
            description: articleRawData.description,
            image: articleRawData.image.imageUrl,
            bundelItems: neccessaryDataMaped
        }
    } catch (err) {
        console.error(err);
    }

};