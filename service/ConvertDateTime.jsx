export const FormatDate=(timestamp)=>{
    return new Date(timestamp)
}
export const formatDateForText=(date)=>{
    return moment(date).format('ll')
}

export const formatTime=(timestamp)=>{
    const date=new Date(timestamp);
    const timeString=date.toLocaleTimeString([],{
        hour:'2-digit',
        minute:'2-digit'
    })
    return timeString;
}

export const getDateRange=(startDate,endDate)=>{
    const start=moment(new Date(startDate),'MM/DD/YYYY');
    const end=moment(new Date(endDate),'MM/DD/YYYY');
    const dates=[];
    while(start.isSameOrBefore(end))
    {
        dates.push(start.format('MM/DD/YYYY'));
        start.add(1,'days')
    }
    return dates;
}

export const GetDateRangeToDisplay=()=>{
    const dateList=[];
    for(let i=0;i<=7;i++)
    {
        dateList.push({
            date:moment().add(i,'days').format('DD'), //26
            day:moment().add(i,'days').format('dd'),
            formattedDate: moment().add(i,'days').format('L') // 01/06/2025
            //Monday

        })
    }
    return dateList;
}
