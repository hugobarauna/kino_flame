import React from "react";
import { Switch, TextField } from "./form_elements";

const Pool = ({ fields, handleChange, handleBlur }) => (
  <div className="flex flex-wrap gap-2 p-4">
    <div className="w-36">
      <TextField
        type="number"
        name="min"
        label="Min instances"
        value={fields.min}
        onChange={handleChange}
        onBlur={handleBlur}
        min="0"
        required
      />
    </div>
    <div className="w-36">
      <TextField
        type="number"
        name="max"
        label="Max instances"
        value={fields.max}
        onChange={handleChange}
        onBlur={handleBlur}
        min="1"
        required
      />
    </div>
    <div className="w-36">
      <TextField
        type="number"
        name="max_concurrency"
        label="Max concurrency"
        value={fields.max_concurrency}
        onChange={handleChange}
        onBlur={handleBlur}
        min="1"
        required
      />
    </div>
    <div className="w-36">
      <TextField
        type="text"
        name="copy_paths"
        label="Copy paths"
        value={fields.copy_paths}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
    <Switch
      label="Compress"
      name="compress"
      checked={fields.compress}
      onChange={handleChange}
      help={
        "FLAME automatically transfers\n" +
        "packages between machines. By\n" +
        "default, compression is disabled\n" +
        "as it may be expensive, but you\n" +
        "may want to enable compression\n" +
        "if you plan to spawn dozens of\n" +
        "machines or more."
      }
    />
  </div>
);

export default Pool;
