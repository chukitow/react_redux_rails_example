class Api::V1::TasksController < Api::V1::BaseController
  def index
    render json: Task.all
  end

  def create
    task = Task.new(task_params)

    if task.save
      render json: task, status: :ok
    else
      render json: task.erros, status: :unprocessable_entity
    end
  end

  private
  def task_params
    {
      title: params[:title],
      content: params[:content],
      completed: params[:completed]
    }
  end
end
