"use client";

import { motion } from "framer-motion";

const videos = [
  { id: "XugEu37XcZU", title: "Missed Call Recognition to Message Feedback" },
  { id: "JRdNMHBSVhE", title: "Business Card Contact Creation" },
  { id: "AjCMsV_lg3k", title: "Music Recognition to Spotify Playlist" },
];

export default function VideoDemos() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 py-32 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-phantom-text text-center mb-16"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 400,
          }}
        >
          Video Demos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.slice(0, 2).map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <div
                className="rounded-lg overflow-hidden"
                style={{ boxShadow: "0 2px 20px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
              <p
                className="font-sans text-phantom-text text-center mt-4"
                style={{ fontSize: "0.95rem", fontWeight: 400 }}
              >
                {video.title}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="md:col-start-1 md:col-end-3 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3,
              }}
              className="w-full md:w-1/2"
            >
              <div
                className="rounded-lg overflow-hidden"
                style={{ boxShadow: "0 2px 20px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${videos[2].id}`}
                    title={videos[2].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
              <p
                className="font-sans text-phantom-text text-center mt-4"
                style={{ fontSize: "0.95rem", fontWeight: 400 }}
              >
                {videos[2].title}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
