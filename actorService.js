// chứa các hàm gọi tới lớp model để lấy dữ liệu và trả về file proto
module.exports.getActorsList = async () => {
    try {
        const rows = await model.knexObj.select('*').from('actor');
        return rows;
    } catch (error) {
        console.error(error);
    }
}