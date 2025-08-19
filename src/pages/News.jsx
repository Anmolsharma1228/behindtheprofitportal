import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import { FaClock } from "react-icons/fa";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          "https://news-api65.p.rapidapi.com/api/v1/crypto/articles",
          {
            params: {
              format: "json",
              time_frame: "24h",
              page: 1,
              limit: 9,
            },
            headers: {
              "x-rapidapi-key": "53856e8622mshf4f81d1d7f29d55p14114fjsn82cac1895aed",
              "x-rapidapi-host": "news-api65.p.rapidapi.com",
            },
          }
        );
        setArticles(res.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-center mt-10"><Loader /></p>;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Latest Crypto News</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {articles.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition transform duration-300"
          >
            {/* Image with overlay */}
            <div className="relative">
              <img
                src={item.media[0]}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex items-center justify-center transition">
                <span className="text-white text-lg font-semibold px-3 text-center">
                  {item.title}
                </span>
              </div>
            </div>

            {/* Card content */}
            <div className="p-5 flex flex-col h-[280px]">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <FaClock className="mr-2" />
                <span>{new Date(item.published).toLocaleString()}</span>
              </div>
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.summary}
              </p>

              <Link
                to={item.link}
                target="_blank"
                className="text-center w-[150px] mt-auto inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
