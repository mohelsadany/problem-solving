var area = "RANB6945، 6945 طريف، 3679، حي النرجس، الرياض 13327، السعودية";
const AreaTrim = (area) => {
    if (!area) {
      return area;
    }
    let removedWords = [
      'رقم',
      'السعودية',
      'الرياض',
      'Saudi Arabia',
      'Jeddah',
      'المدينة المنورة',
      'جدة',
      'الدمام',
      'المملكة العربية السعودية',
      'الخبر',
    ];
    const areaParts = area
      .replace(/\b([\d]+)\b|[،]+/gi, ',')
      .split(',')
      .map((v) => v.trim());
    const areaPartsFiltered = areaParts.filter(
      (v) => v && !removedWords.includes(v) && !(v.length == 2 && v == 'حي')
    );
    if (areaPartsFiltered.length === 1) {
      area = areaPartsFiltered[0];
    } else if (areaPartsFiltered.length === 2) {
      area = areaPartsFiltered[1];
    } else if (areaPartsFiltered.length === 3) {
      area = areaPartsFiltered[2];
    } else if (areaPartsFiltered.length === 4) {
      area = areaPartsFiltered[2];
    } else {
      area = area;
    }
  
    return area.toString();
  };
    console.log(AreaTrim(area));