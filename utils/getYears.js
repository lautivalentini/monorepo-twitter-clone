const getYears = (year) => {
    const start = (year - 120).toString();
    const years = [];

    for (let i = start; i <= year; i++) {
        years.push(i.toString());
    }

    return years;
};

export default getYears;
