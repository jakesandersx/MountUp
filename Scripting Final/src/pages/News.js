import { useState, useEffect } from 'react';
import '../css/Sport.css';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useArticlesBySport } from '../hooks/articleHook';
import '../css/News.css';

function News() {
    const { sportId } = useParams();
    const sportList = useSelector((state) => state.teams.sports);
    const { data } = useArticlesBySport(sportId);
    console.log(data);

    return (
        <div className="news-container">
            <h2>News Articles for {sportList.find((sport) => sport.id === sportId)?.name}</h2>
            <table className='news-table'>
                <thead>
                    <tr>
                        <th>Posted</th>
                        <th>Headline</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map((article) => (
                        <tr key={article._id}>
                            <td>{article.posted}</td>
                            <td><Link to={`../articles/${article._id}`}>{article.title}</Link></td>
                            <td>{article.sport}</td>
                        </tr>
                    )) : <h1>This failed</h1>}
                </tbody>
            </table>
        </div>
    );
}

export default News;