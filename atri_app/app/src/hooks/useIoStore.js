import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "trial": {
    "Upload2": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    },
    "Upload1": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    }
  },
  "Showcase": {
    "Upload3": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    },
    "Upload4": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    }
  }
}});

export default useIoStore;
