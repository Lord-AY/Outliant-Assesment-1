const HomeContent = () => {
  return (
    <div className="mt-12">
      <div className="content-row grid grid-cols-2 gap-[200px] mb-24">
        <div className="col-span-1">
          <div className="w-4/5 mt-16">
            <h1 className="text-5xl font-bold mb-4">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-primary mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              sapiente at molestias nostrum totam! Explicabo quaerat expedita
              vitae enim necessitatibus
            </p>
            <div className="mb-12">
              <button className="btn btn-primary me-3">Call to Action</button>
              <button className="btn btn-secondary">See Workspace</button>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative h-full">
            <div className="z-50 image-2 h-2/5 w-2/5 absolute top-0 right-0"></div>
            <div className="image-1 h-4/5 w-4/5 absolute bottom-0 left-0"></div>
          </div>
        </div>
      </div>
      <div className="content-row grid grid-cols-7 gap-[50px] h-[500px] mb-48">
        <div className="col-span-2">
          <div>
            <p className="font-bold">Header Text</p>
            <p className="text-primary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
              ducimus nihil. Perferendis blanditiis ex debitis culpa distinctio!
              Officia quaerat vero, beatae inventore dolores quidem qui
              similique ipsa illo laudantium commodi earum alias maxime neque
              distinctio, explicabo ut autem fugit error expedita ab. Incidunt
              delectus id maxime, officiis assumenda amet natus!
            </p>
          </div>
        </div>
        <div className="col-span-3">
          <div className="image-1 h-full w-full"></div>
        </div>
        <div className="col-span-2">
          <div className="h-full flex flex-col justify-end">
            <p className="font-bold">Header Text</p>
            <p className="text-primary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
              ducimus nihil. Perferendis blanditiis ex debitis culpa distinctio!
              Officia quaerat vero, beatae inventore dolores quidem qui
              similique ipsa illo laudantium commodi earum alias maxime neque
              distinctio, explicabo ut autem fugit error expedita ab. Incidunt
              delectus id maxime, officiis assumenda amet natus!
            </p>
          </div>
        </div>
      </div>
      <div className="content-row grid grid-cols-7 gap-[50px] bg-gray pb-24">
        <div className="col-span-3">
          <div className="image-1 h-[500px] w-full -mt-24"></div>
        </div>
        <div className="col-span-4">
          <div className="flex h-full flex-col justify-center w-2/3">
            <h1 className="text-5xl font-bold mb-4">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-primary mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              sapiente at molestias nostrum totam! Explicabo quaerat expedita
              vitae enim necessitatibus
            </p>
            <div className="mb-12">
              <button className="btn btn-primary me-3">Call to Action</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
