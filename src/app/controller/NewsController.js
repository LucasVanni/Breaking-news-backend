import axios from 'axios';
import 'dotenv/config';

const messageResponse = {
    BAD_REQUEST: 'Verifique seus parâmetros de consulta.',
    UNAUTHORIZED_REQUEST: 'Usuário não autorizado',
    TOO_MANY_REQUESTS: 'Você atingiu seu limite de taxa por minuto ou por dia',
};

export default {
    async index(req, res) {
        const { TIMES_API_KEY } = process.env;
        const { qtdNews, page } = req.query;

        if (!qtdNews || !page) {
            return res.status(400).json({
                message: "Parâmetros não informados 'qtdNews' ou 'page'!",
                success: false,
            });
        }

        const valueLimit = qtdNews;
        const valueOffset = 500 - qtdNews * page;
        const URL = `https://api.nytimes.com/svc/news/v3/content/all/all.json`;
        const PARAMS = `?api-key=${TIMES_API_KEY}&limit=${valueLimit}&offset=${valueOffset}`;
        const news = await axios.get(URL + PARAMS);

        if (news.status === 400) {
            res.status(news.status).json({
                message: messageResponse.BAD_REQUEST,
            });
        } else if (news.status === 401) {
            res.status(news.status).json({
                message: messageResponse.UNAUTHORIZED_REQUEST,
            });
        } else if (news.status === 429) {
            res.status(news.status).json({
                message: messageResponse.TOO_MANY_REQUESTS,
            });
        } else {
            res.status(200).json(news.data);
        }

        return res;
    },
};
