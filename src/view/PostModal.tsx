"use client";

import Modal from "@/components/Modal";
import Image from "next/image";
import CrossIcon from "../assets/cross-icon.svg";
import SendIcon from "../assets/send-icon.svg";
import SmileIcon from "../assets/smile-icon.svg";
import PhotoIcon from "../assets/photo-icon.svg";
import VideoIcon from "../assets/video-icon.svg";
import GIFIcon from "../assets/gif-icon.svg";
import PollIcon from "../assets/poll-icon.svg";
import User from "../assets/user.svg";
import { Textarea } from "@headlessui/react";
import clsx from "clsx";
import ActionBox from "@/components/ActionBox";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

interface PostModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostModal = ({ showModal, setShowModal }: PostModalProps) => {
  const [postContent, setPostContent] = useState<string>("");
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const FooterActionConfig = [
    {
      key: "emoji",
      img: SmileIcon,
      title: "Emoji",
      onClick: () => {},
    },
    {
      key: "photo",
      img: PhotoIcon,
      title: "Photo",
      onClick: () => {},
    },
    {
      key: "video",
      img: VideoIcon,
      title: "Video",
      onClick: () => {},
    },
    {
      key: "gif",
      img: GIFIcon,
      title: "GIF",
      onClick: () => {},
    },
    {
      key: "poll",
      img: PollIcon,
      title: "Poll",
      onClick: () => {},
    },
  ];

  useEffect(() => {
    if(showLoader){
      /* To hide the loader */
      setTimeout(() => {
        setShowLoader(false);
        setShowModal(false);
        setPostContent("");
      }, 3000)
    }
  }, [showLoader])

  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      className="min-w-[944px] h-[411px]"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="flex px-2">
            <div className="flex pr-2">
              <Image
                src={User}
                alt="Profile Photo"
                className="rounded-full"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-[nexa] font-black text-2xl">
              Forrest Skerman-Stevenson
            </span>
            <span className="text-neutral-700 font-montserrat font-semibold text-xl">
              Posting to Merazonia
            </span>
          </div>
        </div>
        <button
          className="flex justify-end hover:cursor-pointer"
          tabIndex={0}
          onClick={() => setShowModal(false)}
        >
          <Image src={CrossIcon} alt="Cross Icon" width={60} height={60} />
        </button>
      </div>

      <div className="flex w-full mt-4">
        <Textarea
          className={clsx(
            "mt-3 block w-full resize-none rounded-lg border-b-2 bg-white/5 py-1.5 px-3 text-xl text-black font-montserrat",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 placeholder:text-placeholder-gray"
          )}
          rows={5}
          placeholder="What do you want to talk about?"
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between mt-8">
        <div className="flex flex-row items-center">
          {FooterActionConfig.map(({ title, img, onClick, key }) => (
            <div className="flex flex-row first:mr-2 mx-2" key={key}>
              <ActionBox title={title} img={img} onClick={onClick} />
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Button
            className="w-[170px] h-[52px] items-center text-base"
            disabled={postContent.length === 0}
            onClick={() => setShowLoader(true)}
          >
            {showLoader ? (
              <Loader />
            ) : (
              <div className="flex flex-row gap-2">
                <Image src={SendIcon} alt="" />
                <span>Post</span>
              </div>
            )}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PostModal;
