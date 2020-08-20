export default {
    Movie: {
        isLiked: () => false
    },
    Mutation: {
        toggleLike: (_, {id, isLiked}, {cache}) => {
            cache.writeData({
                id: `Movie:${id}`,
                data: {
                    isLiked: !isLiked
                }
            })
        }
    }
}
